/* eslint-disable */
import _m0 from "protobufjs/minimal";

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
    case Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
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

function createBaseMsgMintCoin(): MsgMintCoin {
  return { creator: "", amount: "", owner: "" };
}

export const MsgMintCoin = {
  encode(message: MsgMintCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintCoin();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: MsgMintCoin): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintCoin>, I>>(object: I): MsgMintCoin {
    const message = createBaseMsgMintCoin();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseMsgMintCoinResponse(): MsgMintCoinResponse {
  return { result: 0 };
}

export const MsgMintCoinResponse = {
  encode(message: MsgMintCoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintCoinResponse();
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
    return { result: isSet(object.result) ? resultFromJSON(object.result) : 0 };
  },

  toJSON(message: MsgMintCoinResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = resultToJSON(message.result));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintCoinResponse>, I>>(object: I): MsgMintCoinResponse {
    const message = createBaseMsgMintCoinResponse();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBaseMsgBurnCoin(): MsgBurnCoin {
  return { creator: "", amount: "", owner: "" };
}

export const MsgBurnCoin = {
  encode(message: MsgBurnCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnCoin();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: MsgBurnCoin): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnCoin>, I>>(object: I): MsgBurnCoin {
    const message = createBaseMsgBurnCoin();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseMsgBurnCoinResponse(): MsgBurnCoinResponse {
  return { result: 0 };
}

export const MsgBurnCoinResponse = {
  encode(message: MsgBurnCoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnCoinResponse();
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
    return { result: isSet(object.result) ? resultFromJSON(object.result) : 0 };
  },

  toJSON(message: MsgBurnCoinResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = resultToJSON(message.result));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnCoinResponse>, I>>(object: I): MsgBurnCoinResponse {
    const message = createBaseMsgBurnCoinResponse();
    message.result = object.result ?? 0;
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
    this.MintCoin = this.MintCoin.bind(this);
    this.BurnCoin = this.BurnCoin.bind(this);
  }
  MintCoin(request: MsgMintCoin): Promise<MsgMintCoinResponse> {
    const data = MsgMintCoin.encode(request).finish();
    const promise = this.rpc.request("ysip.ysip.Msg", "MintCoin", data);
    return promise.then((data) => MsgMintCoinResponse.decode(new _m0.Reader(data)));
  }

  BurnCoin(request: MsgBurnCoin): Promise<MsgBurnCoinResponse> {
    const data = MsgBurnCoin.encode(request).finish();
    const promise = this.rpc.request("ysip.ysip.Msg", "BurnCoin", data);
    return promise.then((data) => MsgBurnCoinResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
