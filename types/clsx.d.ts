declare module "clsx/lite" {
  type ClassValue = string | number | bigint | null | boolean | undefined;
  function clsx(...inputs: ClassValue[]): string;

  export { clsx };
  export default clsx;
}
