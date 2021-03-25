// let memory;
// let price;
// let color;
// let image; 

// const memories = [
//     {
//         memory: 64,
//         price: "700",
//     },
//     {
//         memory: 128,
//         price: "900",
//     },
//     {
//         memory: 256,
//         price: "1100",
//     },

// ]

// outer: while(true) {
//     memory = prompt("Memory?");
//     for (let i= 0, i < memories.length; i++) {
//     if (memories[i]memory === +memory) {
//         alert(memories[i]=price]);
//     }
//     break outer;
// }
// while (price) {
//     color = prompt("Color ?");
//     if (color === "black") {
//         image = "black1.jpg";
//         break;
//     } else if (color === null) {
//         alert("Пока");
//         break;
//     }
// }

// if (price) {
//     document.write("<h1>Price: " + price + "$</h1>");
       
// }

// if (image) {
//     document.write('<img src="./images/' + image + '">');
// }

// if (!price) {
//     document.write("<h1>Пока!</h1>")
// }
// let array;
// let index;


// for (let index = 1; index <= 10; index++) {
//     console.log(index);
// }

// console.log("!!!");
// const items = [10, 49, 70];
// for (let i=0; i < items.length; i++) {
//     items[i] *= items[i];
// }
// const items = [10, 49, 70];
// const newItems = items.map((item) => {
//     return item * item;
// });
// console.log(newItems);

// const user = {
//     name: "Bob",
//     items: [10, 20, 30],
//     greet () {
//         this.items.forEach((item) => {
//             console.log(item);
//         });
//     },
// };

// user.greet();

// const x = {
//     a: 10,
// }
// const y = x;

// y.a = 20;

// console.log(x);
// console.log(y);

// const items = [10, 20, 30];
// const newItems = items.map((item) => item * item);

// console.log(items, newItems);

// const products = [
//     {
//         id: 1,
//         name: "iPhone 12",
//         price: 800,
//     },
//     {
//         id: 2,
//         name: "Air pods",
//         price: 200,
//     },
//     {
//         id: 3,
//         name: "Apple watch",
//         price: 600,
//     },
//     {
//         id: 4,
//         name: "MacBook PRO",
//         price: 3000,
//     },
// ];

// let someProducts = [];
// for (let index = 0; index < products.length; index++) {
//     if (products[index].price >500) {
//         someProducts.push(products[index]);
//     }    
// }

// const someProducts = products.filter((product) => product.price > 500);
// console.log(someProducts);

// const someProducts = products.find((product) => product.id === 3);
// console.log(someProducts);

// const foundProductIndex = products.findIndex((product) => product.id === 2);
// console.log(foundProductIndex);

// let sumPrice = 0;
// for (let i = 0; i < products.length; i++) {
//     sumPrice += products[i].price;
// }

// let sumPrice = 0;
// for (let i = 0; i < products.length; i++) {
//     if (products[i].price > 700) {
//     sumPrice += products[i].price;
//     }    
// }

// const sumPrice = products
//     .filter((prod) => prod.price > 700)
//     .map((prod) => ({...prod, price: prod.price - 20}))
//     .reduce((acc, curr) => (acc += curr.price), 0);


// console.log(sumPrice);

const products = [
    {
        id: 1,
        name: "iPhone 12",
        price: 800,
    },
    {
        id: 2,
        name: "Air pods",
        price: 200,
    },
    {
        id: 3,
        name: "Apple watch",
        price: 600,
    },
    {
        id: 4,
        name: "MacBook PRO",
        price: 3000,
    },
];

const totalPrice = products.reduce((acc, curr) => {
    return (acc += curr.price);
}, 0);

products.push({totalPrice})

console.log(totalPrice);
console.log(products);

