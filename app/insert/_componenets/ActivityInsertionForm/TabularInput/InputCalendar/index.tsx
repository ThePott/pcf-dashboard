"use client"

import useInsertStore from "@/app/insert/_store"
import { PcfInputCoordinate } from "@/app/insert/_types"
import { makeKstYmd } from "@/app/shared/utils/make-kst-ymd"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as IconCalendar } from "lucide-react"
import { useRef } from "react"
import InputBase from "../InputBase"

const InputCalendar = ({ columnKey, rowIndex }: PcfInputCoordinate) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const rowArray = useInsertStore((state) => state.rowArray)
    const updateRowArray = useInsertStore((state) => state.updateRowArray)
    const dateCell = rowArray[rowIndex]?.[columnKey]
    const date = dateCell ? new Date(dateCell.value) : undefined

    const handleSelect = (selected: Date | undefined) => {
        if (!selected) return
        const ymd = makeKstYmd(selected)
        updateRowArray(rowIndex, columnKey, ymd)

        if (!inputRef?.current) return
        inputRef.current.value = ymd
    }

    // TODO: onBlur validate 해야

    return (
        <InputBase
            ref={inputRef}
            isError={false}
            onBlur={(event) => updateRowArray(rowIndex, columnKey, event.target.value)}
            TrailingComponent={
                <Popover>
                    <PopoverTrigger asChild>
                        <Button>
                            <IconCalendar size={16} />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-fit">
                        <Calendar mode="single" selected={date} onSelect={handleSelect} />
                    </PopoverContent>
                </Popover>
            }
        />
    )
}

export default InputCalendar
