package keeper

import (
	"fmt"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	"ysip/x/ysip/types"
)

func (k Keeper) Mint(ctx sdk.Context, mintMsg types.MsgMintCoin) (types.MintResult, error) {
	owner, _ := sdk.AccAddressFromBech32(mintMsg.Owner)
	coin, _ := sdk.ParseCoinNormalized(mintMsg.Amount)

	// update account balance

	balance := k.bankKeeper.GetBalance(ctx, owner, coin.Denom)
	newBalance := balance.Add(coin)

	store := ctx.KVStore(sdk.NewKVStoreKey(banktypes.StoreKey))

	accountStore := prefix.NewStore(store, banktypes.CreateAccountBalancesPrefix(owner))

	if newBalance.IsZero() {
		accountStore.Delete([]byte(balance.Denom))
	} else {
		bz := k.cdc.MustMarshal(&newBalance)
		accountStore.Set([]byte(newBalance.Denom), bz)
	}

	// update total supply
	supplyStore := prefix.NewStore(store, banktypes.SupplyKey)
	bz := supplyStore.Get([]byte(newBalance.Denom))

	var amount sdk.Int
	err := amount.Unmarshal(bz)
	if err != nil {
		panic(fmt.Errorf("unable to unmarshal supply value %v", err))
	}

	supply := sdk.Coin{
		Denom:  newBalance.Denom,
		Amount: amount,
	}

	supplyBytes, err := coin.Amount.Marshal()

	supply = supply.Add(balance)
	supplyStore.Set([]byte(newBalance.Denom), supplyBytes)

	return types.MintResult_SUCCESS, nil
}
