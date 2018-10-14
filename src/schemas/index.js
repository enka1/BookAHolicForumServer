import {GraphQLSchema} from "graphql";
import {PubSub} from "graphql-subscriptions";

import query from "./queries";
import mutation from "./mutations";
import subscription from "./subcriptions";

export const pubSub = new PubSub();
export const COMMENT_ADDED = "COMMENT_ADDED";

export default new GraphQLSchema({query, mutation, subscription});