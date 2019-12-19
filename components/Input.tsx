import React, { useState } from "react"

import { observer } from "mobx-react"

const Input: React.FC<{ addTodo: (value: string) => void }> = observer(
    ({ addTodo }) => {
        const [value, setValue] = useState("")

        const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
            setValue(event.currentTarget.value)
        }

        const handleSubmit = () => {
            addTodo(value)
        }

        return (
            <div>
                <input value={value} onChange={handleChange} />
                <button onClick={handleSubmit}>Save</button>
            </div>
        )
    }
)

export default Input
