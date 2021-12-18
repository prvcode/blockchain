import { Request, Response } from "express";
import {
  CreateBlockChainNodeInput,
  ReadBlockChainNodeInput,
  CreateBlockChainInput,
  ReadHopBlockChainInput,
  DeleteBlockChainInput
} from "../schema/blockchain.schema";

import {
  createBlockChainNode,
  getBlockChainNode,
  createBlockChain,
  findBlockChain,
  getBlockChain,
  getHopBlockChain,
  deleteBlockChain,
  removeBlockChain
} from "../service/blockchain.service";

export async function createBlockChainHandler(
  req: Request<{}, [], CreateBlockChainInput["body"]>,
  res: Response
) {
  const body = req.body;
  const blockChain = await createBlockChain(body);
  return res.send(blockChain);
}

export async function getBlockChainHandler(
  req: Request,
  res: Response
) { 
  const blockChain = await getBlockChain();
  return res.send(blockChain);
}

export async function createBlockChainNodeHandler(
  req: Request<{}, {}, CreateBlockChainNodeInput["body"]>,
  res: Response
) {
  const body = req.body;
  const blockChain = await createBlockChainNode({ ...body });
  return res.send(blockChain);
}

export async function getBlockChainNodeHandler(
  req: Request<ReadBlockChainNodeInput["params"]>,
  res: Response
) {
  const txHash = req.params.tx_hash;
  const blockChainNode = await getBlockChainNode({ txHash });

  if (!blockChainNode) {
    return res.sendStatus(404);
  }
  return res.send(blockChainNode);
}


export async function getHopBlockChainHandler(
  req: Request<ReadHopBlockChainInput["params"]>,
  res: Response
) {
  const origin = req.params.origin;
  const hops = req.params.hops;
  
  if (!origin) {
    return res.sendStatus(404);
  }

  if (!hops || (parseInt(hops)==0)) {
    return res.status(401).send("Invalid hop");
  }

  const blockChain = await getHopBlockChain({ origin, hops });

  if (!blockChain) {
    return res.sendStatus(404);
  }
  return res.send(blockChain);
}

export async function deleteBlockChainHandler(
  req: Request<DeleteBlockChainInput["params"]>,
  res: Response
) {
  const txHash = req.params.tx_hash;
  const blockChainNode = await findBlockChain({ txHash });

  if (!blockChainNode) {
    return res.sendStatus(404);
  }

  await deleteBlockChain({ txHash });
  return res.sendStatus(200);
}

export async function removeBlockChainHandler(
  req: Request,
  res: Response
) { 
  await removeBlockChain();
   return res.sendStatus(200);
}
