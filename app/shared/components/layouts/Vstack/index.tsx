import { DivProps, None, XsToXl } from "@/app/shared/types"
import { gapToCn } from "@/app/shared/utils/variant-to-classname"
import clsx from "clsx"
import { tv } from "tailwind-variants/lite"

const vstackVariants = tv({
    base: "flex flex-col",
    variants: {
        gap: gapToCn,
    },
})

interface WithVstackProps {
    gap?: XsToXl | None
}

/**
 * 세로 배치시 사용
 * default gap: lg (16px)
 * */
const Vstack = ({ gap = "md", ...props }: DivProps & WithVstackProps) => {
    const { className, children, ...rest } = props

    return (
        <div {...rest} className={clsx(vstackVariants({ gap }), className)}>
            {children}
        </div>
    )
}

export default Vstack
