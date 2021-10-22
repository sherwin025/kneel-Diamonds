
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Orders } from "./Orders.js"
import {Metals} from "./Metals.js"
import {addCustomOrder } from "./database.js"
import { JewelryType } from "./typeofJewlery.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton"){
            addCustomOrder()
        }
    }
)


export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                <div>${Metals()}</div>
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                <div>${DiamondSizes()}</div>
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                <div>${JewelryStyles()}</div>
            </section>
        </article>
        <section class="choices__styles options">
                <h2>Types</h2>
                <div>${JewelryType()}</div>
            </section>
        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            <div>${Orders()}</div>
        </article>
    `
}

