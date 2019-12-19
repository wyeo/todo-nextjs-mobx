import { observable, computed, action, toJS } from "mobx"
import { useStaticRendering } from "mobx-react"

useStaticRendering(typeof window === "undefined")

export type ItemType = {
    value: string
    active: boolean
}

class Store {
    @observable items: Array<ItemType> = []

    @computed get getItems() {
        return this.items
    }

    @action.bound
    addItem = (value: ItemType["value"]) => {
        if (value.length && !this.items.find(item => item.value === value)) {
            this.items = this.items.concat({ value, active: true })
        }
    }

    @action.bound
    toggleItem(value: ItemType["value"]) {
        this.items = this.items.map(item =>
            item.value === value ? { ...item, active: !item.active } : item
        )
    }
}

export default Store
