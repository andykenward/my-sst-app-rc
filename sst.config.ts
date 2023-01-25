import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";

type Profile = "production" | "development" | "default";
type Region = "us-east-1" | "eu-west-2";

export default {
  config(input) {
    const PROFILE: Record<string, string> = {
      production: "production",
      development: "development",
      default: "development",
    } satisfies Record<Profile, string>;

    const REGION: Record<string, string> = {
      production: "us-east-1",
      development: "eu-west-2",
      default: "eu-west-2",
    } satisfies Record<keyof typeof PROFILE, Region>;

    return {
      name: "my-sst-app-rc",
      region: (input.stage && REGION[input.stage]) || REGION.default,
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
