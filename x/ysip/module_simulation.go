package ysip

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"ysip/testutil/sample"
	ysipsimulation "ysip/x/ysip/simulation"
	"ysip/x/ysip/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = ysipsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgMintCoin = "op_weight_msg_mint_coin"
	// TODO: Determine the simulation weight value
	defaultWeightMsgMintCoin int = 100

	opWeightMsgBurnCoin = "op_weight_msg_burn_coin"
	// TODO: Determine the simulation weight value
	defaultWeightMsgBurnCoin int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	ysipGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&ysipGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgMintCoin int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgMintCoin, &weightMsgMintCoin, nil,
		func(_ *rand.Rand) {
			weightMsgMintCoin = defaultWeightMsgMintCoin
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgMintCoin,
		ysipsimulation.SimulateMsgMintCoin(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgBurnCoin int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgBurnCoin, &weightMsgBurnCoin, nil,
		func(_ *rand.Rand) {
			weightMsgBurnCoin = defaultWeightMsgBurnCoin
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgBurnCoin,
		ysipsimulation.SimulateMsgBurnCoin(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
