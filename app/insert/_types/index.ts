import { activity_record } from "@/app/generated/prisma/client"

export type PcfInsertionPayloadElement = Omit<
    activity_record,
    "product_id" | "company_id" | "created_at" | "updated_at" | "record_status" | "id"
>

export type PcfInsertionCell = {
    value: string
    overlaying: string
    isError: boolean
}

export type PcfInsertionRow = Record<keyof PcfInsertionPayloadElement, PcfInsertionCell>
