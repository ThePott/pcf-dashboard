"use client"

import { ActivityInsertionPrerequisite } from "../../page"
import TabularInput from "./TabularInput"

const ActivityInsertionForm = (props: ActivityInsertionPrerequisite) => {
    return (
        <div>
            <p>this is test form</p>
            <form>
                <input />
                <button>submit</button>
                <TabularInput {...props} />
            </form>
        </div>
    )
}

export default ActivityInsertionForm
