let memory;
let price;
let color;
let image;

outer: while(true) {
    memory = prompt("Введите объем памяти, Гб");
    switch (memory) {
        case "64":
            price = 700;
            break outer;
        case "128":
            price = 900;
            break outer;
        case "256":
            price = 1100;
            break outer;
        case "512":
            price = 1300;
            break outer;
        case null:
            break outer;
        default:
            break;
    }
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