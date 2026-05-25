"use client"

import useInsertStore from "@/app/insert/_store"
import { PcfInputCoordinate } from "@/app/insert/_types"
import { makeKstYmd } from "@/app/shared/utils/make-kst-ymd"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as IconCalendar } from "lucide-react"
import InputBase from "../InputBase"

const InputCalendar = ({ columnKey, rowIndex }: PcfInputCoordinate) => {
    const rowArray = useInsertStore((state) => state.rowArray)
    const updateRowArray = useInsertStore((state) => state.updateRowArray)
    const dateCell = rowArray[rowIndex]?.[columnKey]
    const date = dateCell ? new Date(dateCell.value) : undefined

    return (
        <InputBase
            isError={false}
            TrailingComponent={
                <Popover>
                    <PopoverTrigger asChild>
                        <Button>
                            <IconCalendar size={16} />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={(selected) => {
                                if (!selected) return
                                const ymd = makeKstYmd(selected)
                                updateRowArray(rowIndex, columnKey, ymd)
                            }}
                            className="rounded-lg border shrink-0"
                        />
                    </PopoverContent>
                </Popover>
            }
        />
    )
}

export default InputCalendar
