import { getType, setType } from "./database.js"

const types = getType()
let targetValue = 0

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "jewlery"){
            targetValue = parseInt(event.target.value)
            setType(parseInt(event.target.value))
        }
    }
)

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton"){
            targetValue = 0
        }
    }
)

export const JewelryType = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    for (const type of types){
        if (targetValue === type.id) {
            html += `<li>
            <input type="radio" name="jewlery" value="${type.id}" checked="checked" /> ${type.type}
        </li>`
        } else {
            html += `<li>
            <input type="radio" name="jewlery" value="${type.id}" /> ${type.type}
        </li>`
        }
    }

    html += "</ul>"
    return html
}

