"use client"

import { testCreateActionRecord } from "./actions"

const TestForm = () => {
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
            </form>
        </div>
    )
}

export default TestForm
