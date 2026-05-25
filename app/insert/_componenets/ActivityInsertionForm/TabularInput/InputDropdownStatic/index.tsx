import { activity_unit, ghg_scope } from "@/app/generated/prisma/enums"
import useInsertStore from "@/app/insert/_store"
import { PcfInputCoordinate, PcfInsertionPayloadElement } from "@/app/insert/_types"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EllipsisVertical } from "lucide-react"
import { useRef } from "react"
import InputBase from "../InputBase"

const ghgScopeToLabel: Record<ghg_scope, string> = {
    SCOPE_1: "Scope 1",
    SCOPE_2: "Scope 2",
    SCOPE_3: "Scope 3",
}

const activityUnitToLabel: Record<activity_unit, string> = {
    kWh: "kWh",
    kg: "kg",
    ton_km: "ton-km",
}

const makeEntries = (forWhat: keyof PcfInsertionPayloadElement) => {
    switch (forWhat) {
        case "unit":
            return Object.entries(activityUnitToLabel)
        case "scope":
            return Object.entries(ghgScopeToLabel)
        default:
            throw new Error("")
    }
}

const InputDropdownStatic = ({ columnKey, rowIndex }: PcfInputCoordinate) => {
    const updateRowArray = useInsertStore((state) => state.updateRowArray)
    const entries = makeEntries(columnKey)

    const inputRef = useRef<HTMLInputElement>(null)

    const handleClick = (value: string) => {
        updateRowArray(rowIndex, columnKey, value)
        if (!inputRef?.current) return
        inputRef.current.value = value
    }

    return (
        <InputBase
            ref={inputRef}
            isError={false}
            TrailingComponent={
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button>
                            <EllipsisVertical />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuGroup>
                            {entries.map(([key, value]) => (
                                <DropdownMenuItem key={key} onClick={() => handleClick(value)}>
                                    {value}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            }
        />
    )
}

export default InputDropdownStatic
