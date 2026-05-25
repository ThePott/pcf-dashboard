import Hstack from "@/app/shared/components/layouts/Hstack"
import clsx from "clsx"
import { JSX } from "react"
import { tv } from "tailwind-variants/lite"

const inputBaseVariants = tv({
    base: "rounded-my-sm my-transition items-center outline",
    variants: {
        isError: {
            false: "focus-within:outline-border-muted outline-transparent bg-dark-red",
            true: "focus-within:outline-washed-red focus-within:outline-2 outline-washed-red",
        },
    },
})

type InputBaseProps = {
    isError: boolean
    TrailingComponent?: JSX.Element
}
const InputBase = ({ isError, TrailingComponent }: InputBaseProps) => {
    return (
        <Hstack className={clsx(inputBaseVariants({ isError }))}>
            <input className="w-full min-w-0 border-0 px-3 py-2 outline-0 placeholder:text-iua-fg-muted disabled:text-iua-fg-dim disabled:placeholder:text-iua-fg-dim" />
            {TrailingComponent}
        </Hstack>
    )
}

export default InputBase
