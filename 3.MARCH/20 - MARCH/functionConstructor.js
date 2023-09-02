

function Product(n,p,r) {
    this.name = n;
    this.price = p;
    this.rating = r;
}


const p = new Product('sam', 150000, 4.9);


console.log(p);


const x = {
    p : Product
}

x.p('sam', 200000, 5);

console.log(x);