import { ApiHandler } from "sst/node/api";

import { Time } from "@my-sst-app-rc/core";

export const handler = ApiHandler(async (_evt) => {
  const res = await fetch("https://nodejs.org/api/documentation.json");
  if (res.ok) {
    const data = await res.json();
    console.log(data);
  }

  return {
    statusCode: 200,
    body: `Hello world and some cats. The time is ${Time.now()}`,
  };
});
