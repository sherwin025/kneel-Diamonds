import { getStyles, setStyle } from "./dataaccess.js"

const styles = getStyles()
let targetValue = 0

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style"){
            targetValue = parseInt(event.target.value)
            setStyle(parseInt(event.target.value))
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

export const JewelryStyles = () => {
    let html = "<ul>"

    for (const style of styles) {
        if (targetValue == style.id) {
            html += `<li>
            <input type="radio" name="style" value="${style.id}" checked="checked"/> ${style.style}
        </li>`
        } else {
            html += `<li>
            <input type="radio" name="style" value="${style.id}" /> ${style.style}
        </li>`
    
        }
    }

    html += "</ul>"
    return html
}
