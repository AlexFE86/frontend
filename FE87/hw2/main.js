/*
let memory = prompt("Введите объем памяти");

if (+memory == 64) {
    alert("799$");
} else if (+memory == 128) {
    alert("849$");
} else if (+memory == 256) {
    alert("949$");
} else if (memory ===null) {alert("Пока");
} else {
    alert("Введите допустимое значение");
}
*/

let memory;
let price;
let color;
let image;

while (true) {
    memory = prompt("Memory ?")
    if (+memory === 64) {
        price = 700;
        break;
    } else if (+memory === 128) {
        price = 900;
        break;
    } else if (+memory === 256) {
        price = 1100;
        break;
    }     else if (memory === null) {
        alert("Пока");
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

/*
const memory = prompt("Введите объем памяти, Гб");

switch (memory) {
    case 64:
        console.log('700');
        break;
        case 128:
            console.log('800');
            break;
            case 256:
                console.log('1000');
                break;
                case 512:
                case 1000:
                console.log('1000');
                break;

                default: 
                console.log("неверная память");
                break;

}
*/
















  