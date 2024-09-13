// 1-misol
let person = {};
person.name = "Ali";
console.log(person.name); // Ali

// 2-misol
let ism = prompt("Ismingizni kiriting:");
let yosh = prompt("Yoshingizni kiriting:");

let user = {
    name: ism,
    age: yosh
};

console.log(user);

// 3-misol
user.job = "Dasturchi";
console.log(user.job); // Dasturchi

// 4-misol
let car = {
    brand: "Toyota",
    color: "Qora"
};

car.color = "Oq"; // Qiymatni o'zgartiryapmiz
console.log(car.color); // Oq

// 5-misol
let person = {
    name: "Olim",
    age: 25
};

let text = `Mening ismim ${person.name}, yoshim ${person.age}.`;
console.log(text); // Mening ismim Olim, yoshim 25.

// 6-misol
person.description = `Mening ismim ${person.name}, yoshim ${person.age}.`;
console.log(person.description);

// 7-misol
let person = {
    name: "Akmal",
    age: 17
};

if (person.age > 16) {
    console.log("Siz Astrumda o'qisangiz bo'ladi");
} else {
    console.log("Xali yoshsiz, siz maktabni tugatib keling.");
}

// 8-misol
let student = {
    name: "Laylo",
    age: 20,
    skills: ["HTML", "CSS", "JavaScript"]
};

let skillList = student.skills;
console.log(skillList); // ["HTML", "CSS", "JavaScript"]
