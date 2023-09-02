// rThis concept introduced in ES6 version previously function constructor was used. 

class Product {

    // properties -> variables -> data members

    // name;
    // rating;
    // price;



    // WE CAN ONLY CREATE ONE CUSTOM CONSTRUCTOR FUNCTION

    constructor(n ,p , r) {
        console.log(`calling the constructor`);
        this.name = n;
        this.price = p;
        this.rating = r;

        // if i am returning primitive data that will not be returned but if i return a non-primitive than it will be returned
        // return 10;
        return {x:10, y:20};
    }

    // behaviours -> functions -> member functions

    display() {
        console.log(`displaying the items`);
    }
}


// const p = new Product();

const p = new Product('samsung', 140000, 4.9);


console.log(p);

// p.display();