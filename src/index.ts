export * as ShardManager from "./Client/index";
export * as ShardInfo from "./Utils/ShardInfo";
export * as ShardError from "./Utils/Error";

import { ShardManager } from "./Client/index";
import { ShardInfo } from "./Utils/ShardInfo";
import { ShardError } from "./Utils/Error";

export default {
  ShardManager,
  ShardInfo,
  ShardError
}