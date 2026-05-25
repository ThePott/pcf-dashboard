import prismaClient from "@/app/shared/configs/prisma-client"
import type { NextApiRequest, NextApiResponse } from "next"

export const findFactorMany = async (_req: NextApiRequest, res: NextApiResponse) => {
    const result = await prismaClient.emission_factor.findMany()
    res.status(200).json({ result })
}
