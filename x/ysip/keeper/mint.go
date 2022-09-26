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

func (k Keeper) checkMinter(addr sdk.AccAddress, ctx sdk.Context) error {
	store := ctx.KVStore(k.storeKey)
	minter := store.Get([]byte(types.MinterKey))
	var minterAddress sdk.AccAddress
	err := minterAddress.Unmarshal(minter)

	if err != nil {
		return fmt.Errorf("unable to unmarshall minter address %v", err)
	}
	if !addr.Equals(minterAddress) {
		return fmt.Errorf("unathorized minter address")
	}
	return nil
}

func (k Keeper) Mint(ctx sdk.Context, mintMsg types.MsgMintCoin) (types.MintResult, error) {
	creator, _ := sdk.AccAddressFromBech32(mintMsg.Creator)
	owner, _ := sdk.AccAddressFromBech32(mintMsg.Owner)
	coin, _ := sdk.ParseCoinNormalized(mintMsg.Amount)

	if err := k.checkMinter(creator, ctx); err != nil {
		return types.MintResult_FAIL, err
	}

	if err := k.bankKeeper.MintCoins(ctx, types.ModuleName, sdk.NewCoins(coin)); err != nil {
		return types.MintResult_FAIL, err
	}

	if err := k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, owner, sdk.NewCoins(coin)); err != nil {
		return types.MintResult_FAIL, err
	}

	return types.MintResult_SUCCESS, nil
}
