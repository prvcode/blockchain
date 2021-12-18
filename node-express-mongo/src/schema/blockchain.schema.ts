import { object, number, string, TypeOf, array } from "zod";

const nodePayload = object({
    tx_hash: string({
      required_error: "tx_hash is required",
    }),
    from: string({
      required_error: "from is required",
    }),
    to: string({
      required_error: "to is required",
    }),
    timestamp: string({
      required_error: "timestamp is required",
    }),
    value: string({
      required_error: "value is required",
    })
})

const payload = {
  body: nodePayload,
};

const arrayPayload = {
  body: array(nodePayload)
};

const params = {
  params: object({
    tx_hash: string({
      required_error: "tx_hash is required",
    }),
  }),
};

const hopParams = {
  params: object({
    origin: string({
      required_error: "Origin is required",
    }),
    hops: string({
      required_error: "Hops is required",
    }),
  }),
};

export const createBlockChainNodeSchema = object({
  ...payload,
});

export const createBlockChainSchema = object({
  ...arrayPayload,
});

export const deleteBlockChainSchema = object({
  ...params,
});

export const getBlockChainNodeSchema = object({
  ...params,
});

export const getHopBlockChain = object({
  ...hopParams,
});

export const getBlockChainSchema = object({});
export const emptyBlockChainSchema = object({});

export type CreateBlockChainNodeInput = TypeOf<typeof createBlockChainNodeSchema>;
export type CreateBlockChainInput = TypeOf<typeof createBlockChainSchema>;
export type ReadBlockChainInput = TypeOf<typeof getBlockChainSchema>;
export type ReadBlockChainNodeInput = TypeOf<typeof getBlockChainNodeSchema>;
export type DeleteBlockChainInput = TypeOf<typeof deleteBlockChainSchema>;
export type ReadHopBlockChainInput = TypeOf<typeof getHopBlockChain>;
export type EmptyBlockChainInput = TypeOf<typeof emptyBlockChainSchema>;
