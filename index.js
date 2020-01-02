// Your code here

function Cat(name, sex) {
    this.name = name;
    this.sex = sex;
    this.speak = function() {
        return this.name + ' says meow!'
    }
}

function Dog(name, sex) {
    this.name = name;
    this.sex = sex;
    this.speak = function() {
        return this.name + ' says woof!'
    }
}

function Bird(name, sex) {
    this.name = name;
    this.sex = sex;
    this.speak = function() {
        if (this.sex === 'male') {
            return `It's me! ${this.name}, the parrot!`
        } else {
            return this.name + " says squawk!"
        }
    }
}