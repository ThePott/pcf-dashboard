"use server"

import prismaClient from "@/app/shared/configs/prisma-client"

export const testCreateActionRecord = async () =>
    await prismaClient.$transaction(async (tx) => {
        const productName = "왕제품"
        const productResult = await prismaClient.product.upsert({
            where: { name: productName },
            update: {},
            create: {
                name: productName,
            },
        })

        const recordResult = await prismaClient.activity_record.create({
            data: {
                acted_at: new Date(),
                amount: 10,
                record_status: "PROVISIONAL",
                scope: "SCOPE_1",
                emission_factor_id: 1,
                activity_description_id: 1,
                product_id: productResult.id,
                unit: "kWh",
            },
        })

        return recordResult
    })
