import { ApiHandler } from "sst/node/api";
import { Time } from "@my-sst-app-rc/core";

export const handler = ApiHandler(async (_evt) => {
  console.log("bob");
  return {
    body: `Hello world and not bob. The time is ${Time.now()}`,
  };
});
