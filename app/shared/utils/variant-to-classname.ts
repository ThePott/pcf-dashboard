import { None, TailwindCSS, XsToXl } from "../types"

export const gapToCn: Record<XsToXl | None, TailwindCSS> = {
    none: "gap-0",
    xs: "gap-my-xs",
    sm: "gap-my-sm",
    md: "gap-my-md",
    lg: "gap-my-lg",
    xl: "gap-my-xl",
}
