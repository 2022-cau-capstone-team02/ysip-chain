package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "ysip/testutil/keeper"
	"ysip/x/ysip/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.YsipKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
