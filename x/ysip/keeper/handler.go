package keeper

import (
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"ysip/x/ysip/types"
)

func (k Keeper) SetMinter(ctx sdk.Context, strAddr string) error {
	store := ctx.KVStore(k.storeKey)
	addr, err := sdk.AccAddressFromBech32(strAddr)
	byteAddr, err := addr.Marshal()
	if err != nil {
		return fmt.Errorf("unable to marshall")
	}

	store.Set([]byte(types.MinterKey), byteAddr)

	return nil
}

func (k Keeper) checkManager(addr sdk.AccAddress, ctx sdk.Context) error {
	store := ctx.KVStore(k.storeKey)
	minter := store.Get([]byte(types.MinterKey))
	var minterAddress sdk.AccAddress
	err := minterAddress.Unmarshal(minter)

	if err != nil {
		return fmt.Errorf("unable to unmarshall minter address %v", err)
	}
	if !addr.Equals(minterAddress) {
		return fmt.Errorf("unathorized address")
	}
	return nil
}

func (k Keeper) Mint(ctx sdk.Context, mintMsg types.MsgMintCoin) (types.Result, error) {
	creator, _ := sdk.AccAddressFromBech32(mintMsg.Creator)
	owner, _ := sdk.AccAddressFromBech32(mintMsg.Owner)
	coin, _ := sdk.ParseCoinNormalized(mintMsg.Amount)

	if err := k.checkManager(creator, ctx); err != nil {
		return types.Result_FAIL, err
	}

	if err := k.bankKeeper.MintCoins(ctx, types.ModuleName, sdk.NewCoins(coin)); err != nil {
		return types.Result_FAIL, err
	}

	if err := k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, owner, sdk.NewCoins(coin)); err != nil {
		return types.Result_FAIL, err
	}

	return types.Result_SUCCESS, nil
}

func (k Keeper) Burn(ctx sdk.Context, burnMsg types.MsgBurnCoin) (types.Result, error) {
	creator, _ := sdk.AccAddressFromBech32(burnMsg.Creator)
	owner, _ := sdk.AccAddressFromBech32(burnMsg.Owner)
	coin, _ := sdk.ParseCoinNormalized(burnMsg.Amount)

	if err := k.checkManager(creator, ctx); err != nil {
		return types.Result_FAIL, err
	}

	if !owner.Equals(creator) {
		return types.Result_FAIL, fmt.Errorf("only can burn coins from manager account")
	}

	if err := k.bankKeeper.SendCoinsFromAccountToModule(ctx, owner, types.ModuleName, sdk.NewCoins(coin)); err != nil {
		return types.Result_FAIL, err
	}

	if err := k.bankKeeper.BurnCoins(ctx, types.ModuleName, sdk.NewCoins(coin)); err != nil {
		return types.Result_FAIL, err
	}

	return types.Result_SUCCESS, nil

}
