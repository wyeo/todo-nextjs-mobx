import React, { useState } from "react"
import { observer } from "mobx-react"

import { TodoContext } from "../context/index"

import List from "../components/List"
import Input from "../components/Input"

const Home = observer(() => {
    const storeTodo = React.useContext(TodoContext)

    return (
        <div>
            <Input addTodo={storeTodo.addItem} />
            <br />
            <div>
                <p>{"List : "}</p>
                <List
                    items={storeTodo.getItems}
                    toggleItem={storeTodo.toggleItem}
                />
            </div>
        </div>
    )
})

export default Home
