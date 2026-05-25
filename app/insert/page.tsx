import prismaClient from "../shared/configs/prisma-client"
import { makeSerializable } from "../shared/utils/make-serializable"
import TableForm from "./_componenets/TableForm"

const InsertPage = async () => {
    const result = await prismaClient.emission_factor.findMany()
    const serializable = makeSerializable(result)
    console.log({ serializable })

    return (
        <div>
            <div>this is insert page</div>
            <TableForm />
        </div>
    )
}

export default InsertPage
