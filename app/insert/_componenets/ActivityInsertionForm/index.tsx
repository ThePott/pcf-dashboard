"use client"

import { ActivityInsertionPrerequisite } from "../../page"
import { testCreateActionRecord } from "./actions"
import TabularInput from "./TabularInput"

const ActivityInsertionForm = (props: ActivityInsertionPrerequisite) => {
    const handleSubmit = async (event: React.SubmitEvent) => {
        event.preventDefault()

        const recordResult = await testCreateActionRecord()
        const serializable = recordResult
        console.log({ serializable })
    }

    return (
        <div>
            <p>this is test form</p>
            <form onSubmit={handleSubmit}>
                <input />
                <button>submit</button>
                <TabularInput {...props} />
            </form>
        </div>
    )
}

export default ActivityInsertionForm
