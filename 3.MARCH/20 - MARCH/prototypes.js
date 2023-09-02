

let myHeros = ['ironman','thor','spiderman'];

let dcHeros = ['batman','superman','flash'];



const heroPower = {
    thor : 'hammer',
    spiderman : 'sling',

    getSpiderPower : function() {
        console.log(`Spiderman power is ${this.spiderman}`);
    }
}

heroPower.getSpiderPower();

Object.prototype.milan = function() {
    console.log('Milan is present in every objec');
}

// myHeros.milan();
// dcHeros.milan()

// heroPower.milan()

Array.prototype.milan2 = function() {
    console.log(`Milu is present only in arrays`);
}

myHeros.milan2();
dcHeros.milan2();

// heroPower.milan2();


// ++++++++++++++++++++++++++++++++ INHERITENCE ++++++++++++++++++++++++++++++++++++++++++

const user = {
    name : 'top name',
    email : 'top@hmail.com'
}

const Teacher = {
    makeVideos : true
}

const TeachingSupport = {
    isAvailable : false
}

const  TAAssistant = {
    makeAssignments : 'JS Assignments',
    fullTime : true
}


Object.setPrototypeOf(Teacher, user); // We cann access every property of user through Teacher but revese is not allowed.


console.log(Teacher.name);

// console.log(user.makeVideos);



