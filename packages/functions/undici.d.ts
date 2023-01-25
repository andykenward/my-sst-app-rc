// TODO: remove when node 18 types add fetch. https://github.com/DefinitelyTyped/DefinitelyTyped/issues/60924#issuecomment-1358424866

declare global {
  export const {
    fetch,
    FormData,
    Headers,
    Request,
    Response,
  }: typeof import("undici");
}

export {};
