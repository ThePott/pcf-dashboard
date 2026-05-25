import prismaClient from "../shared/configs/prisma-client"

const InsertPage = async () => {
    const result = await prismaClient.emission_factor.findMany()
    console.log({ result })

    return (
        <div>
            <div>this is insert page</div>
        </div>
    )
}

export default InsertPage
