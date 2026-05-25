import prismaClient from "../shared/configs/prisma-client"
import { makeSerializable } from "../shared/utils/make-serializable"
import TestForm from "./_componenets/TestForm"

const InsertPage = async () => {
    const result = await prismaClient.emission_factor.findMany()
    const serializable = makeSerializable(result)
    console.log({ serializable })

    return (
        <div>
            <div>this is insert page</div>
            <TestForm />
        </div>
    )
}

export default InsertPage
