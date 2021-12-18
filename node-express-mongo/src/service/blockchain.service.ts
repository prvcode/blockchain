import { FilterQuery, QueryOptions } from "mongoose";

import BlockChainModel, {
  BlockChainDocument,
  BlockChainNodeInput,
} from "../models/blockchain.model";

import { 
  sourceHopTravesal,
  destinationHopTravesal
 } from "../utils/hoptraversal";

export async function createBlockChainNode(input: BlockChainNodeInput) {
  try {
    const result = await BlockChainModel.create(input);
    return result;
  } catch (e) {
    throw e;
  }
}

export async function createBlockChain(input: Array<BlockChainNodeInput>) {
  try {
    const result = await BlockChainModel.insertMany(input);
    return result;
  } catch (e) {
    throw e;
  }
}

export async function findBlockChain(
  query: FilterQuery<BlockChainDocument>,
  options: QueryOptions = { lean: true }
) {
  try {
    const result = await BlockChainModel.findOne(query, {}, options);
    return result;
  } catch (e) {

    throw e;
  }
}

export async function getBlockChain() {
  try {
    const result = await BlockChainModel.find();
    return result;
  } catch (e) {
    throw e;
  }
}

export async function getHopBlockChain(
  query:any,
  options: QueryOptions = { lean: true }
  ) {
  try {
    const result = await BlockChainModel.find({}, {}, options);
    let hops
    if(parseInt(query.hops) > 0) {
      hops = await sourceHopTravesal(query.origin, query.hops, result, [])
    } else {
      hops = await destinationHopTravesal(query.origin, Math.abs(query.hops), result, [])
    }
    return hops;
  } catch (e) {
    throw e;
  }
}

export async function getBlockChainNode(
  query: FilterQuery<BlockChainDocument>,
  options: QueryOptions = { lean: true }
) {
  try {
    const result = await BlockChainModel.findOne(query, {}, options);
    return result;
  } catch (e) {
    throw e;
  }
}

export async function deleteBlockChain(query: FilterQuery<BlockChainDocument>) {
  return BlockChainModel.deleteOne(query);
}

export async function removeBlockChain() {
  return BlockChainModel.deleteMany();
}
