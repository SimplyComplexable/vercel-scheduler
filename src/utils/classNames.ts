export const classNames = (
  ...args: Array<string | boolean | null | undefined>
) => args.filter(Boolean).join(" ");
