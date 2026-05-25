import prismaClient from "../shared/configs/prisma-client"
import TestForm from "./_componenets/TestForm"

export const dynamic = "force-dynamic"

const InsertPage = async () => {
    const result = await prismaClient.emission_factor.findMany()
    console.log({ result })

    return (
        <div>
            <div>this is insert page</div>
            <TestForm />
        </div>
    )
}

export default InsertPage
