import { getSizes, setSize } from "./dataaccess.js"

const sizes = getSizes()
let targetValue = 0

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            targetValue = parseInt(event.target.value)
            setSize(parseInt(event.target.value))
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

export const DiamondSizes = () => {
    let html = "<ul>"

    for (const size of sizes) {
        if (targetValue == size.id) {
            html += `<li>
            <input type="radio" name="size" value="${size.id}" checked="checked"/> ${size.carets}
        </li>
    `
    } else {
        html += `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    }
    }


    html += "</ul>"

    return html
    }