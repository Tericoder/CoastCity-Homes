// global.d.ts
declare module "next" {
  export interface PageProps<TParams = {}> {
    params: TParams; // ✅ overwrite with object type
  }
}
