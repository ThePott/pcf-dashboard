import { activity_unit, ghg_scope } from "@/app/generated/prisma/enums"
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

const DropdownStatic = ({ columnKey, rowIndex }: PcfInputCoordinate) => {
    const entries = makeEntries(columnKey)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>
                    <EllipsisVertical />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    {entries.map(([key, value]) => (
                        <DropdownMenuItem key={key}>{value}</DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DropdownStatic
