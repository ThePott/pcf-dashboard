"use client"

import { testCreateActionRecord } from "./actions"

const TestForm = () => {
    const handleSubmit = async (event: React.SubmitEvent) => {
        event.preventDefault()

        const recordResult = await testCreateActionRecord()

        console.log({ recordResult })
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
