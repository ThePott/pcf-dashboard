"use client"
import { create } from "zustand"
import { PcfInsertionPayloadElement, PcfInsertionRow } from "../_types"

type InsertStoreState = {
    rowArray: PcfInsertionRow[]
    updateRowArray: (rowIndex: number, columnKey: keyof PcfInsertionPayloadElement, value: string) => void
}

const useInsertStore = create<InsertStoreState>()(() => ({
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
        console.log({ rowIndex, columnKey, value })
    },
}))

export default useInsertStore
