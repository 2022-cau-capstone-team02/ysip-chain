/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "ysip.ysip";

export enum Result {
  SUCCESS = 0,
  FAIL = 1,
  UNRECOGNIZED = -1,
}

export function resultFromJSON(object: any): Result {
  switch (object) {
    case 0:
    case "SUCCESS":
      return Result.SUCCESS;
    case 1:
    case "FAIL":
      return Result.FAIL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Result.UNRECOGNIZED;
  }
}

export function resultToJSON(object: Result): string {
  switch (object) {
    case Result.SUCCESS:
      return "SUCCESS";
    case Result.FAIL:
      return "FAIL";
    default:
      return "UNKNOWN";
  }
}

export interface MsgMintCoin {
  creator: string;
  amount: string;
  owner: string;
}

export interface MsgMintCoinResponse {
  result: Result;
}

export interface MsgBurnCoin {
  creator: string;
  amount: string;
  owner: string;
}

export interface MsgBurnCoinResponse {
  result: Result;
}

const baseMsgMintCoin: object = { creator: "", amount: "", owner: "" };

export const MsgMintCoin = {
  encode(message: MsgMintCoin, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintCoin {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintCoin } as MsgMintCoin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintCoin {
    const message = { ...baseMsgMintCoin } as MsgMintCoin;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    return message;
  },

  toJSON(message: MsgMintCoin): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMintCoin>): MsgMintCoin {
    const message = { ...baseMsgMintCoin } as MsgMintCoin;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    return message;
  },
};

const baseMsgMintCoinResponse: object = { result: 0 };

export const MsgMintCoinResponse = {
  encode(
    message: MsgMintCoinResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintCoinResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintCoinResponse } as MsgMintCoinResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintCoinResponse {
    const message = { ...baseMsgMintCoinResponse } as MsgMintCoinResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = resultFromJSON(object.result);
    } else {
      message.result = 0;
    }
    return message;
  },

  toJSON(message: MsgMintCoinResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = resultToJSON(message.result));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMintCoinResponse>): MsgMintCoinResponse {
    const message = { ...baseMsgMintCoinResponse } as MsgMintCoinResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    } else {
      message.result = 0;
    }
    return message;
  },
};

const baseMsgBurnCoin: object = { creator: "", amount: "", owner: "" };

export const MsgBurnCoin = {
  encode(message: MsgBurnCoin, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBurnCoin {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBurnCoin } as MsgBurnCoin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnCoin {
    const message = { ...baseMsgBurnCoin } as MsgBurnCoin;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    return message;
  },

  toJSON(message: MsgBurnCoin): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBurnCoin>): MsgBurnCoin {
    const message = { ...baseMsgBurnCoin } as MsgBurnCoin;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    return message;
  },
};

const baseMsgBurnCoinResponse: object = { result: 0 };

export const MsgBurnCoinResponse = {
  encode(
    message: MsgBurnCoinResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBurnCoinResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBurnCoinResponse } as MsgBurnCoinResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnCoinResponse {
    const message = { ...baseMsgBurnCoinResponse } as MsgBurnCoinResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = resultFromJSON(object.result);
    } else {
      message.result = 0;
    }
    return message;
  },

  toJSON(message: MsgBurnCoinResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = resultToJSON(message.result));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBurnCoinResponse>): MsgBurnCoinResponse {
    const message = { ...baseMsgBurnCoinResponse } as MsgBurnCoinResponse;
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    } else {
      message.result = 0;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  MintCoin(request: MsgMintCoin): Promise<MsgMintCoinResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  BurnCoin(request: MsgBurnCoin): Promise<MsgBurnCoinResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  MintCoin(request: MsgMintCoin): Promise<MsgMintCoinResponse> {
    const data = MsgMintCoin.encode(request).finish();
    const promise = this.rpc.request("ysip.ysip.Msg", "MintCoin", data);
    return promise.then((data) => MsgMintCoinResponse.decode(new Reader(data)));
  }

  BurnCoin(request: MsgBurnCoin): Promise<MsgBurnCoinResponse> {
    const data = MsgBurnCoin.encode(request).finish();
    const promise = this.rpc.request("ysip.ysip.Msg", "BurnCoin", data);
    return promise.then((data) => MsgBurnCoinResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
