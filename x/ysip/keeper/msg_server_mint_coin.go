package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"ysip/x/ysip/types"
)

func (k msgServer) MintCoin(goCtx context.Context, msg *types.MsgMintCoin) (*types.MsgMintCoinResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	mintMsg := types.MsgMintCoin{
		Creator: msg.Creator,
		Amount:  msg.Amount,
		Owner:   msg.Owner,
	}

	result, err := k.Mint(ctx, mintMsg)

	return &types.MsgMintCoinResponse{Result: result}, err
}
