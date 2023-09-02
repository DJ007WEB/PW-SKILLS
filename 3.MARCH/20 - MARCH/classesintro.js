

class Product {

    // properties -> variables -> data members

    // name;
    // rating;
    // price;

    constructor(n ,p , r) {
        console.log(`calling the constructor`);
        this.name = n;
        this.price = p;
        this.rating = r;
    }

    // behaviours -> functions -> member functions

    display() {
        console.log(`displaying the items`);
    }
}


// const p = new Product();

const p = new Product('samsung', 140000, 4.9);


// console.log(p);

// p.display();