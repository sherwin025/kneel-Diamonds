import { getOrders, getMetals, getSizes, getStyles } from "./database.js"

const buildOrderListItem = (order) => {
// get materials costs 
    const metals = getMetals()
    const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId
    }
)

    const sizes = getSizes()
    const foundSizes = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
)

    const styles = getStyles()
    const foundStyles = styles.find(
        (style) => {
            return style.id === order.styleId
        }
)

const totalCost = foundMetal.price + foundSizes.price + foundStyles.price

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



