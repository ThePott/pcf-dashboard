"use client"
import { activity_record } from "@/app/generated/prisma/client"
import { ActivityInsertionPrerequisite } from "@/app/insert/page"
import { Vstack } from "@/app/shared/components/layouts"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import clsx from "clsx"
import { useState } from "react"

type TabularInputRow = Omit<
    activity_record,
    "product_id" | "company_id" | "created_at" | "updated_at" | "record_status" | "id"
>
const columnHelper = createColumnHelper<TabularInputRow>()

const createColumns = (prerequisite: ActivityInsertionPrerequisite) => {
    const columns = [
        columnHelper.accessor("acted_at", {
            header: "일자(원본)",
            cell: (info) => <input value={info.getValue()?.toISOString().slice(0, 10)} />,
        }),
        columnHelper.display({
            id: "activity_category_id",
            header: "활동 유형",
            cell: () => {
                return <input />
            },
        }),
        columnHelper.accessor("activity_description_id", {
            header: "설명",
            cell: () => <input />,
        }),
        columnHelper.accessor("scope", {
            header: "GHG Scope",
            cell: () => <input />,
        }),
        columnHelper.accessor("amount", {
            header: "량",
            cell: () => (
                <Vstack>
                    <input />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button>Open</button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuGroup>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </Vstack>
            ),
        }),
        columnHelper.accessor("unit", {
            header: "단위",
            cell: () => (
                <Vstack>
                    <input />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button>Open</button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuGroup>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </Vstack>
            ),
        }),
        columnHelper.accessor("emission_factor_id", {
            header: "배출 계수",
            cell: () => (
                <Vstack>
                    <input />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button>Open</button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuGroup>
                                {prerequisite.emissionFactorResult.map((emissionFactor) => (
                                    <DropdownMenuItem key={emissionFactor.id}>{emissionFactor.id}</DropdownMenuItem>
                                ))}
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </Vstack>
            ),
        }),
    ]
    return columns
}

const rowArray = Array(100)
    .fill(null)
    .map(() => ({}) as TabularInputRow)

const TabularInput = (props: ActivityInsertionPrerequisite) => {
    const [columns, _setColumns] = useState(() => createColumns(props))
    const table = useReactTable({
        columns,
        data: rowArray,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <Vstack>
            <p>this is tabular input</p>
            <table className="relative w-full">
                <thead className="bg-bg-neg-1 sticky top-0 z-10">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id} className="flex">
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className={
                                        "border-border-dim hover:outline-border-muted z-10 border px-3 py-2 hover:outline"
                                    }
                                >
                                    {header.isPlaceholder
                                        ? "this is header placeholder"
                                        : flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id} className="absolute left-0 flex w-full">
                            {row.getVisibleCells().map((cell) => {
                                return (
                                    <td
                                        key={cell.id}
                                        className={clsx(
                                            "border-border-dim hover:outline-border-muted z-10 border hover:outline"
                                        )}
                                    >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </Vstack>
    )
}

export default TabularInput
