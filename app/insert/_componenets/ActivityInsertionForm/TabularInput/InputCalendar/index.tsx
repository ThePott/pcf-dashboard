"use client"

import useInsertStore from "@/app/insert/_store"
import { PcfInputCoordinate } from "@/app/insert/_types"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as IconCalendar } from "lucide-react"
import InputBase from "../InputBase"

const InputCalendar = ({ columnKey, rowIndex }: PcfInputCoordinate) => {
    const updateRowArray = useInsertStore((state) => state.updateRowArray)

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
                            onSelect={(selected) => {
                                if (!selected) return
                                updateRowArray(rowIndex, columnKey, selected.toISOString().slice(0, 10))
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
