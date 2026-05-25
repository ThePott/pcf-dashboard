"use client"

import { PcfInputCellProps } from "@/app/insert/_types"
import { makeKstYmd } from "@/app/shared/utils/make-kst-ymd"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as IconCalendar } from "lucide-react"
import { useRef } from "react"
import InputBase from "../InputBase"

const InputCalendar = ({ columnKey, rowIndex, updateData, label }: PcfInputCellProps & { label: string }) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSelect = (selected: Date | string | undefined) => {
        console.log({ selected })
        if (!updateData) return
        if (!selected) return

        if (typeof selected === "string") {
            // TODO: onBlur validate 해야
            updateData(rowIndex, columnKey, selected, selected)
            if (!inputRef?.current) return
            inputRef.current.value = selected
            return
        }

        // TODO: need to reduce repetition
        const ymd = makeKstYmd(selected)
        updateData(rowIndex, columnKey, ymd, ymd)
        if (!inputRef?.current) return
        inputRef.current.value = ymd
    }

    return (
        <InputBase
            ref={inputRef}
            isError={false}
            onBlur={(event) => handleSelect(event.target.value)}
            TrailingComponent={
                <Popover>
                    <PopoverTrigger asChild>
                        <Button>
                            <IconCalendar size={16} />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-fit">
                        <Calendar mode="single" selected={new Date(label)} onSelect={handleSelect} />
                    </PopoverContent>
                </Popover>
            }
        />
    )
}

export default InputCalendar
