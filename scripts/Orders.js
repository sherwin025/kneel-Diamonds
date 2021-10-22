import { getOrders, getMetals, getSizes, getStyles, getType } from "./dataaccess.js"

const buildOrderListItem = (order) => {
// get materials costs 
    const metals = getMetals()
    let foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId
    }
)

    const sizes = getSizes()
    let foundSizes = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
)

    const styles = getStyles()
    let foundStyles = styles.find(
        (style) => {
            return style.id === order.styleId
        }
)

    let totalCost = foundMetal.price + foundSizes.price + foundStyles.price
    
    const types = getType()
    let foundType = types.find(
        (type) => {
            return type.id === order.typeId
        }
    )
    totalCost = totalCost * foundType.pX

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})
    return `<li>
    Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}



