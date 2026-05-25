import { activity_record } from "@/app/generated/prisma/client"

export type PcfInsertionPayloadElement = Omit<
    activity_record,
    "product_id" | "company_id" | "created_at" | "updated_at" | "record_status" | "id"
>

export type PcfInsertionCell = {
    value: string // NOTE: serialize bigint to string
    label: string
    overlaying: string
    isError: boolean
}

export type PcfInsertionColumnKey = keyof PcfInsertionPayloadElement | "activity_category_id"
export type PcfInsertionRow = Record<PcfInsertionColumnKey, PcfInsertionCell>
export type PcfInputCoordinate = {
    columnKey: PcfInsertionColumnKey
    rowIndex: number
}
