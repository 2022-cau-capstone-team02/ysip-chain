package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMintCoin = "mint_coin"

var _ sdk.Msg = &MsgMintCoin{}

func NewMsgMintCoin(creator string, amount string, owner string) *MsgMintCoin {
	return &MsgMintCoin{
		Creator: creator,
		Amount:  amount,
		Owner:   owner,
	}
}

func (msg *MsgMintCoin) Route() string {
	return RouterKey
}

func (msg *MsgMintCoin) Type() string {
	return TypeMsgMintCoin
}

func (msg *MsgMintCoin) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMintCoin) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMintCoin) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
