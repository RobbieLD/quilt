const setup = () => {
    document.getElementById("generate").addEventListener("click", generate);
}

const generate = () => {
    const message = document.getElementById("message").value.toLowerCase().replace(/\s/g, '');
    const onColor = document.getElementById("onColor").value;
    const offColor = document.getElementById("offColor").value;

    console.log("Message: " + message);
    console.log("On Color: " + onColor);
    console.log("Off Color: " + offColor);


    const design = document.getElementById("design");


    // Clear what's in there. 
    design.innerHTML = '';

    
    for (let index = 0; index < message.length; index++) {
        const row = makeRow(message[index].charCodeAt(0) - 96, onColor, offColor);
        design.append(row);
    }
}

const makeRow = (number, on, off) => {
    const row = document.createElement("div");
    row.classList.add("row");
    
    const bin = toBinary(number).padStart(5, '0');

    for (let index = 0; index < bin.length; index++) {
        const chunk = document.createElement("div");
        chunk.classList.add("chunk");        
        chunk.style.backgroundColor = bin[index] == 1 ? on : off;
        row.append(chunk);
    };

    return row;
}

toBinary = (dec) => {
    return (dec >>> 0).toString(2);
}

setup();