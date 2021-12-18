import { Express, Request, Response } from "express";
import {
  createBlockChainNodeHandler,
  getBlockChainHandler,
  deleteBlockChainHandler,
  getBlockChainNodeHandler,
  getHopBlockChainHandler,
  createBlockChainHandler,
  removeBlockChainHandler
} from "./controller/blockchain.controller";

import {
 createBlockChainNodeSchema,
 createBlockChainSchema,
 getBlockChainSchema,
 deleteBlockChainSchema,
 getBlockChainNodeSchema,
 emptyBlockChainSchema
} from "./schema/blockchain.schema";


import validateResource from "./middleware/validateResource";

function routes(app: Express) {

  app.post(
    "/api/blockchain",
    [validateResource(createBlockChainSchema)],
    createBlockChainHandler
  );
  
  app.get(
    "/api/blockchain",
    validateResource(getBlockChainSchema),
    getBlockChainHandler
  );
  
  app.get(
    "/api/blockchain/:origin/:hops",
    validateResource(getBlockChainSchema),
    getHopBlockChainHandler
  );

  app.post(
    "/api/blockchain/node",
    [validateResource(createBlockChainNodeSchema)],
    createBlockChainNodeHandler
  );

   app.get(
    "/api/blockchain/node/:tx_hash",
    validateResource(getBlockChainNodeSchema),
    getBlockChainNodeHandler
  );

  app.delete(
    "/api/blockchain/node/:tx_hash",
    [validateResource(deleteBlockChainSchema)],
    deleteBlockChainHandler
  );

   app.delete(
    "/api/blockchain/remove",
    [validateResource(emptyBlockChainSchema)],
    removeBlockChainHandler
  );
}

export default routes;
