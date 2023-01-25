import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";

export default {
  config(input) {
    const PROFILE: Record<string, string> = {
      production: "production",
      development: "development",
      default: "development",
    };
    return {
      name: "my-sst-app-rc",
      region: "us-east-1",
      profile: (input.stage && PROFILE[input.stage]) || PROFILE.default,
    };
  },
  stacks(app) {
    app.setDefaultFunctionProps({
      runtime: "nodejs18.x",
      architecture: "arm_64",
    });
    app.stack(API);
  },
} satisfies SSTConfig;
