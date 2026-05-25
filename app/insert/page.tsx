import { activity_category, activity_description, emission_factor } from "../generated/prisma/browser"
import prismaClient from "../shared/configs/prisma-client"
import { makeSerializable } from "../shared/utils/make-serializable"
import ActivityInsertionForm from "./_componenets/ActivityInsertionForm"

export type ActivityInsertionPrerequisite = {
    emissionFactorResult: emission_factor[]
    activityCategoryResult: activity_category[]
    activityDescriptionResult: activity_description[]
}

const InsertPage = async () => {
    const result = await prismaClient.emission_factor.findMany()
    const serializable = makeSerializable(result)
    console.log({ serializable })

    const emissionFactorPromise = prismaClient.emission_factor.findMany()
    const activityCategoryPromise = prismaClient.activity_category.findMany()
    const activityDescriptionPromise = prismaClient.activity_description.findMany()

    const [emissionFactorResult, activityCategoryResult, activityDescriptionResult] = await Promise.all([
        emissionFactorPromise,
        activityCategoryPromise,
        activityDescriptionPromise,
    ])

    return (
        <div>
            <div>this is insert page</div>
            <ActivityInsertionForm
                emissionFactorResult={emissionFactorResult}
                activityCategoryResult={activityCategoryResult}
                activityDescriptionResult={activityDescriptionResult}
            />
        </div>
    )
}

export default InsertPage
