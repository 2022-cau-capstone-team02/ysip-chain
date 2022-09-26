package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"ysip/x/ysip/types"
)

var _ = strconv.Itoa(0)

func CmdBurnCoin() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "burncoin [amount] [owner]",
		Short: "Broadcast message burnCoin",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argAmount := args[0]
			argOwner := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgBurnCoin(
				clientCtx.GetFromAddress().String(),
				argAmount,
				argOwner,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
