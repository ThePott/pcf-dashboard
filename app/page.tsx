import prismaClient from "./shared/configs/prisma-client"
import { makeSerializable } from "./shared/utils/make-serializable"

const DashboardPage = async () => {
    const result = await prismaClient.activity_record.findMany()
    const serializable = makeSerializable(result)

    return <div>{JSON.stringify({ serializable })}</div>
}

export default DashboardPage
