import { getMetals, setMetal, } from "./database.js"

const metals = getMetals()
let targetValue = 0

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            targetValue = parseInt(event.target.value)
            setMetal(parseInt(event.target.value))
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


export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        if (targetValue == metal.id){
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" checked="checked" /> ${metal.metal}
        </li>`
        } else {
            html += `<li>
            <input type="radio" name="metal" value="${metal.id}"  /> ${metal.metal}
        </li>`
        }
    }

    html += "</ul>"
    return html

}
