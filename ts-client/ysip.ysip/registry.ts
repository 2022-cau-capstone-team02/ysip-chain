import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgBurnCoin } from "./types/ysip/tx";
import { MsgMintCoin } from "./types/ysip/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/ysip.ysip.MsgBurnCoin", MsgBurnCoin],
    ["/ysip.ysip.MsgMintCoin", MsgMintCoin],
    
];

export { msgTypes }