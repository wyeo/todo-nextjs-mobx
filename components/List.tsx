import React, { useState } from "react"
import { css, cx } from "emotion"

import { ItemType } from "../store"

const listCompletedStyle: any = css`
    text-decoration-line: line-through;
`

const Item: React.FC<{
    value: string
    active: boolean
    toggleItem: (value: string) => void
}> = React.memo(({ value, active, toggleItem }) => {
    const handleClick = () => {
        toggleItem(value)
    }

    return (
        <li
            key={value}
            onClick={handleClick}
            className={cx({
                [listCompletedStyle]: !active
            })}
        >
            {value}
        </li>
    )
})

const List: React.FC<{
    items: Array<ItemType>
    toggleItem: (value: string) => void
}> = React.memo(({ items, toggleItem }) => (
    <ul>
        {items &&
            items.map(x => (
                <Item
                    key={x.value}
                    value={x.value}
                    active={x.active}
                    toggleItem={toggleItem}
                />
            ))}
    </ul>
))

export default List
