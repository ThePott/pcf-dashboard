import Hstack from "@/app/shared/components/layouts/Hstack"
import { InputProps } from "@/app/shared/types"
import clsx from "clsx"
import { JSX } from "react"
import { tv } from "tailwind-variants/lite"

const inputBaseVariants = tv({
    base: "rounded-my-sm my-transition items-center outline px-3 py-2 size-full",
    variants: {
        isError: {
            false: "focus-within:outline-border-muted outline-transparent bg-dark-red",
            true: "focus-within:outline-washed-red focus-within:outline-2 outline-washed-red",
        },
    },
})

type WithInputBaseProps = {
    isError: boolean
    TrailingComponent?: JSX.Element
}
const InputBase = ({ isError, TrailingComponent, ...props }: InputProps & WithInputBaseProps) => {
    return (
        <Hstack className={clsx(inputBaseVariants({ isError }))}>
            <input
                {...props}
                className="size-full min-w-0 border-0 outline-0 placeholder:text-iua-fg-muted disabled:text-iua-fg-dim disabled:placeholder:text-iua-fg-dim"
            />
            {TrailingComponent}
        </Hstack>
    )
}

export default InputBase
