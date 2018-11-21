console.log("Objects containing other objects");

class Product {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return " " + this.name + " " + this.price + " euros";
    }
}

let p1 = new Product("vacuum cleaner", 100);
let p2 = new Product("pencil", 3);
let p3 = new Product("bike", 300);
let p4 = new Product("car", 1000);
let p5 = new Product("couch", 200);
let p6 = new Product("skateboard", 100);
let r1 = new Product("new_pencil", 5);

class ShoppingCart {

    constructor() {
        this.products = []; 
        this.total = 0;
    }

    discount(array) {

        let totalPrice = 0;
        let counts = {};
        let price = [];
        array.forEach(function (x) {
            counts[x.name] = (counts[x.name] || 0) + 1;

            if (counts[x.name] % 4 == 0) {

                counts[x.name + '_free'] = Number(counts[x.name]) / 4;
                counts[x.name + '_total'] = Number(counts[x.name]) - counts[x.name + '_free'];

            } else {
                counts[x.name + '_total'] = Number(counts[x.name]);
            }
            counts[x.name + '_totalPrice'] = counts[x.name + '_total'] * x.price;

        });
        let total = [];
        for (let key in counts) {
            if (counts[key + '_totalPrice'] != null) {
                total.push(counts[key + '_totalPrice'])
            }


        }
        let newTotal = 0;
        for (let i = 0; i < total.length; i++) {
            newTotal += total[i];
        }

        this.total = newTotal;
    }
    
    replace(productName, replacementProduct) {
        for(let i = 0; i< this.products.length; i++){
            if(this.products[i].name == productName) {
                this.products[i] = replacementProduct;
            }
        }
    }


    addProduct(product) {
        this.products.push(product);

    }


    totalPrice() {
        if (this.products.length > 5) {
            this.total = this.total * 0.9;
        }
    }


    toString() {
        return "cart with: " + this.products;
    }
}

let cart = new ShoppingCart();

cart.addProduct(p1);
cart.addProduct(p2);
cart.addProduct(p2);
cart.addProduct(p2);
cart.addProduct(p2);
cart.addProduct(p2);
cart.addProduct(p3);
cart.addProduct(p4);
cart.addProduct(p5);
cart.addProduct(p6);
cart.addProduct(p6);
cart.addProduct(p6);
cart.addProduct(p6);
cart.discount(cart.products);
cart.totalPrice();
console.log("We have a " + cart);
console.log("Total price is " + cart.total + " euros")
cart.replace("pencil", r1);
cart.discount(cart.products);
cart.totalPrice();
console.log("We have a " + cart);
console.log("Total price is " + cart.total + " euros")
