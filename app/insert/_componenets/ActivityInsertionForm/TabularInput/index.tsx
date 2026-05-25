"use client"
import { ghg_scope } from "@/app/generated/prisma/client"
import { PcfInsertionPayloadElement } from "@/app/insert/_types"
import { ActivityInsertionPrerequisite } from "@/app/insert/page"
import { Vstack } from "@/app/shared/components/layouts"
import { Calendar } from "@/components/ui/calendar"
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

const columnHelper = createColumnHelper<PcfInsertionPayloadElement>()

const ghgScopeToLabel: Record<ghg_scope, string> = {
    SCOPE_1: "Scope 1",
    SCOPE_2: "Scope 2",
    SCOPE_3: "Scope 3",
}

const createColumns = (prerequisite: ActivityInsertionPrerequisite) => {
    const columns = [
        columnHelper.accessor("acted_at", {
            header: "일자(원본)",
            cell: (info) => (
                <Vstack>
                    <input value={info.getValue()?.toISOString().slice(0, 10)} />

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button>Open</button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuGroup>
                                <DropdownMenuItem asChild>
                                    <Calendar mode="single" onSelect={() => {}} className="rounded-lg border" />
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </Vstack>
            ),
        }),
        columnHelper.display({
            id: "activity_category_id",
            header: "활동 유형",
            cell: () => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button>Open</button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuGroup>
                            {prerequisite.activityCategoryResult.map((category) => (
                                <DropdownMenuItem key={category.id}>{category.category}</DropdownMenuItem>
                            ))}
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            ),
        }),
        columnHelper.accessor("activity_description_id", {
            header: "설명",
            cell: () => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button>Open</button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuGroup>
                            {prerequisite.activityDescriptionResult.map((description) => (
                                <DropdownMenuItem key={description.id}>{description.description}</DropdownMenuItem>
                            ))}
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            ),
        }),
        columnHelper.accessor("scope", {
            header: "GHG Scope",
            cell: () => (
                <Vstack>
                    <input />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button>Open</button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuGroup>
                                {Object.entries(ghgScopeToLabel).map(([ghgScope, label]) => (
                                    <DropdownMenuItem key={ghgScope}>{label}</DropdownMenuItem>
                                ))}
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </Vstack>
            ),
        }),
        columnHelper.accessor("amount", {
            header: "량",
            cell: () => <input />,
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
    .map(() => ({}) as PcfInsertionPayloadElement)

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
            <table>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
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
                        <tr key={row.id}>
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
