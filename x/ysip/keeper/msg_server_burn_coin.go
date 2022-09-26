package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"ysip/x/ysip/types"
)

func (k msgServer) BurnCoin(goCtx context.Context, msg *types.MsgBurnCoin) (*types.MsgBurnCoinResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	burnMsg := types.MsgBurnCoin{
		Creator: msg.Creator,
		Amount:  msg.Amount,
		Owner:   msg.Owner,
	}

	result, err := k.Burn(ctx, burnMsg)

	return &types.MsgBurnCoinResponse{Result: result}, err
}
