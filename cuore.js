const CuoreFactory = function(element) {
    let root = ""
    let bpm = 0
    let oxygen = 0
    let isBeating = false
    let bpmElement = null
    let oxygenElement = null
    let shapeElement = null

    if(element != "") {
        root = document.getElementById(element)
        root.className = "cuore stopped"
        bpmElement = document.createElement("div")
        bpmElement.className = "bpm"
        shapeElement = document.createElement("div")
        shapeElement.className = "shape"
        oxygenElement = document.createElement("div")
        oxygenElement.className = "fill"
        shapeElement.appendChild(oxygenElement)
        root.appendChild(bpmElement)
        root.appendChild(shapeElement)
    }

    Object.defineProperty(this, "BPM", {
        set: (bpmValue) => {
            if(bpmValue > 280) {
                bpmValue = 280
            }
            bpm = bpmValue
            bpmElement.textContent = bpmValue
            if(bpmValue === "0") {
                shapeElement.style.animation = "none"
            } else {
                shapeElement.style.animation = `beat ${60 / bpmValue}s infinite`
            }
        },
        get: () => bpm
    })
    
    Object.defineProperty(this, "oxygen", {
        set: (oxygenValue) => {
            oxygen = oxygenValue
            oxygenElement.style.height = oxygenValue
        },
        get: () => oxygen
    })
    Object.defineProperty(this, "isBeating", {
        set: (isBeatingValue) => {
            isBeating = isBeatingValue
            if(isBeating === true) {
                root.className = "cuore"
            } else {
                root.className = "cuore stopped"
            }
        },
        get: () => isBeating
    }) 
}

//module.exports = CuoreFactory