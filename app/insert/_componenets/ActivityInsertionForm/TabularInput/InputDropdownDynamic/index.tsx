import useInsertStore from "@/app/insert/_store"
import { PcfInputCoordinate } from "@/app/insert/_types"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { EllipsisVertical } from "lucide-react"
import { useRef } from "react"
import InputBase from "../InputBase"

type WithInputDropdownDynamicProps<T> = {
    queryResult: T[]
    filterRule: (element: T) => boolean
}
const InputDropdownDynamic = <T,>({
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

    // {filteredQueryResult.map((element) => (
    //     <DropdownMenuItem key={element.id} onClick={() => handleClick(value)}>
    //         {element.value}
    //     </DropdownMenuItem>
    // ))}
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
                        <DropdownMenuGroup></DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            }
        />
    )
}

export default InputDropdownDynamic
