import useInsertStore from "@/app/insert/_store"
import { PcfInputCoordinate } from "@/app/insert/_types"
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

type WithInputDropdownDynamicProps<T extends { id: BigInt; label: string }> = {
    queryResult: T[]
    filterRule: (element: T) => boolean
}
const InputDropdownDynamic = <T extends { id: BigInt; label: string }>({
    queryResult,
    filterRule,
    columnKey,
    rowIndex,
}: PcfInputCoordinate & WithInputDropdownDynamicProps<T>) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const updateRowArray = useInsertStore((state) => state.updateRowArray)

    const filteredQueryResult = queryResult.filter(filterRule)

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
                            {filteredQueryResult.map((element) => (
                                <DropdownMenuItem
                                    key={element.id.toString()}
                                    onClick={() => handleClick(element.label)}
                                >
                                    {element.label}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            }
        />
    )
}

export default InputDropdownDynamic
