"use client"

import prismaClient from "@/app/shared/configs/prisma-client"

const TestForm = () => {
    const handleSubmit = async () => {
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
    }
    return (
        <div>
            <p>this is test form</p>
            <form>
                <input />
                <button>submit</button>
            </form>
        </div>
    )
}

export default TestForm
