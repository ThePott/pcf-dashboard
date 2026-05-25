import prismaClient from "./shared/configs/prisma-client"

const DashboardPage = async () => {
    const result = await prismaClient.activity_record.findMany()
    return <div>{JSON.stringify({ result })}</div>
}

export default DashboardPage
