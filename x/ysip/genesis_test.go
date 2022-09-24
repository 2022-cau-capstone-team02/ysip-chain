package ysip_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "ysip/testutil/keeper"
	"ysip/testutil/nullify"
	"ysip/x/ysip"
	"ysip/x/ysip/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.YsipKeeper(t)
	ysip.InitGenesis(ctx, *k, genesisState)
	got := ysip.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
