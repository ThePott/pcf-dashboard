import { DivProps, None, XsToXl } from "@/app/shared/types"
import { gapToCn } from "@/app/shared/utils/variant-to-classname"
import clsx from "clsx"
import { tv } from "tailwind-variants/lite"

const hstackVariants = tv({
    base: "flex",
    variants: {
        gap: gapToCn,
    },
})

interface WithHstackProps {
    gap?: XsToXl | None
}

const Hstack = ({ gap = "md", ...props }: DivProps & WithHstackProps) => {
    const { className, children, ...rest } = props

    return (
        <div {...rest} className={clsx(hstackVariants({ gap }), className)}>
            {children}
        </div>
    )
}

export default Hstack
