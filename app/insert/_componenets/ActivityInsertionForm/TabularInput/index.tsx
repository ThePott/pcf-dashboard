"use client"
import { PcfInsertionColumnKey, PcfInsertionRow } from "@/app/insert/_types"
import { ActivityInsertionPrerequisite } from "@/app/insert/page"
import { Vstack } from "@/app/shared/components/layouts"
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table"
import clsx from "clsx"
import { useState } from "react"
import InputBase from "./InputBase"
import InputCalendar from "./InputCalendar"
import InputDropdownStatic from "./InputDropdownStatic"

const columnHelper = createColumnHelper<PcfInsertionRow>()

const createColumns = (prerequisite: ActivityInsertionPrerequisite) => {
    const columns = [
        columnHelper.accessor("acted_at", {
            header: "일자(원본)",
            cell: (info) => <InputCalendar columnKey="acted_at" rowIndex={info.row.index} />,
        }),
        columnHelper.display({
            id: "activity_category_id",
            header: "활동 유형",
            cell: (info) => (
                <InputDropdownStatic
                    columnKey="activity_category_id"
                    rowIndex={info.row.index}
                    queryResult={prerequisite.activityCategoryResult}
                    updateData={info.table.options.meta?.updateData}
                />
            ),
        }),
        columnHelper.accessor("activity_description_id", {
            header: "설명",
            cell: (info) => (
                <InputDropdownStatic
                    columnKey="activity_description_id"
                    rowIndex={info.row.index}
                    queryResult={prerequisite.activityDescriptionResult.filter((activityDescription) => {
                        const selectedCategoryId = info.row.original.activity_category_id?.value
                        if (!selectedCategoryId) return true

                        const currentCategoryId = activityDescription.activity_category_id.toString()
                        return selectedCategoryId === currentCategoryId
                    })}
                    updateData={info.table.options.meta?.updateData}
                />
            ),
        }),
        columnHelper.accessor("scope", {
            header: "GHG Scope",
            cell: (info) => (
                <InputDropdownStatic
                    columnKey="scope"
                    rowIndex={info.row.index}
                    updateData={info.table.options.meta?.updateData}
                />
            ),
        }),
        columnHelper.accessor("amount", {
            header: "량",
            cell: () => <InputBase type="number" isError={false} />,
        }),
        columnHelper.accessor("unit", {
            header: "단위",
            cell: (info) => (
                <InputDropdownStatic
                    columnKey="unit"
                    rowIndex={info.row.index}
                    updateData={info.table.options.meta?.updateData}
                />
            ),
        }),
        columnHelper.accessor("emission_factor_id", {
            header: "배출 계수",
            cell: () => <InputBase type="number" isError={false} />,
        }),
    ]
    return columns
}

const rowArray = Array(100)
    .fill(null)
    .map(() => ({}) as PcfInsertionRow)

export type UpdateDataFunction = (
    rowIndex: number,
    columnKey: PcfInsertionColumnKey,
    value: string,
    label: string
) => void

const TabularInput = (props: ActivityInsertionPrerequisite) => {
    const [columns, _setColumns] = useState(() => createColumns(props))
    const [data, setData] = useState(rowArray)

    const updateData: UpdateDataFunction = (rowIndex, columnKey, value, label) => {
        const rowArray = [...data]
        const row = rowArray[rowIndex]
        const cell = row?.[columnKey]
        if (!cell) return

        // NOTE: 빈 셀 클릭했으면 아무것도 안 함
        if (!value && !cell.value) return

        cell.value = value
        cell.label = label
        cell.isError = false

        setData(rowArray)
    }

    const table = useReactTable({
        columns,
        data: rowArray,
        getCoreRowModel: getCoreRowModel(),
        meta: {
            updateData,
        },
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
