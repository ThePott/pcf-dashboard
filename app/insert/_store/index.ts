"use client"
import { create } from "zustand"
import { PcfInsertionPayloadElement, PcfInsertionRow } from "../_types"

type InsertStoreState = {
    rowArray: PcfInsertionRow[]
    updateRowArray: (rowIndex: number, columnKey: keyof PcfInsertionPayloadElement, value: string) => void
}

const useInsertStore = create<InsertStoreState>()((set, get) => ({
    rowArray: Array(100)
        .fill(null)
        .map(
            () =>
                ({
                    acted_at: {},
                    activity_description_id: {},
                    amount: {},
                    emission_factor_id: {},
                    scope: {},
                    unit: {},
                }) as PcfInsertionRow
        ),
    updateRowArray: (rowIndex, columnKey, value) => {
        const rowArray = [...get().rowArray]
        const row = rowArray[rowIndex]
        const cell = row?.[columnKey]
        if (!cell) return

        // NOTE: 빈 셀 클릭했으면 아무것도 안 함
        if (!value && !cell.value) return

        cell.value = value
        cell.isError = false

        set({ rowArray })
    },
}))

export default useInsertStore
