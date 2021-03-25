let memory;
let price;
let color;
let image; 

const memories = [
    {
        memory: 64,
        price: "700",
    },
    {
        memory: 128,
        price: "900",
    },
    {
        memory: 256,
        price: "1100",
    },

]

outer: while(true) {
    memory = prompt("Memory?");
    for (let i= 0, i < memories.length; i++) {
    if (memories[i]memory === +memory) {
        alert(memories[i]=price]);
    }
    break outer;
}
while (price) {
    color = prompt("Color ?");
    if (color === "black") {
        image = "black1.jpg";
        break;
    } else if (color === null) {
        alert("Пока");
        break;
    }
}

if (price) {
    document.write("<h1>Price: " + price + "$</h1>");
       
}

if (image) {
    document.write('<img src="./images/' + image + '">');
}

if (!price) {
    document.write("<h1>Пока!</h1>")
}
// let array;
// let index;


// for (let index = 1; index <= 10; index++) {
//     console.log(index);
    
// }

// console.log("!!!");