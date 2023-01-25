import { ApiHandler } from "sst/node/api";

import { Time } from "@my-sst-app-rc/core";

export const handler = ApiHandler(async (_evt) => {
  return {
    body: `Hello world and some cats. The time is ${Time.now()}`,
  };
});
