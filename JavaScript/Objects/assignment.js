//example
let friend1 = {
    name: "Bhavana",
    age: 23,
    isStudent: true,
    greet: function () {
        console.log("Hello, I am Bhavana");
    },
    skills: ["JavaScript", "Python", "HTML","CSS"],
    address: {
        city: "Hassan",
        state: "Karnataka"
    }
};

let friend2 = {
    name: "Adi",
    age: 21,
    isStudent: false,
    greet: function () {
        console.log("Hello, I am adi");
    },
    skills: ["Java", "CSS", "React"],
    address: {
        city: "Mysore",
        state: "Karnataka"
    }
};

let friend3 = {
    name: "Anjana",
    age: 23,
    isStudent: true,
    greet: function () {
        console.log("Hello, I am Anjana");
    },
    skills: ["C", "C++", "Python"],
    address: {
        city: "Chennai",
        state: "Tamil Nadu"
    }
};

let friend4 = {
    name: "Sneha",
    age: 22,
    isStudent: true,
    greet: function () {
        console.log("Hello, I am Sneha");
    },
    skills: ["JavaScript", "Angular", "SQL"],
    address: {
        city: "Chikkamangaluru",
        state: "Telangana"
    }
};

let friend5 = {
    name: "Sanjana",
    age: 24,
    isStudent: false,
    greet: function () {
        console.log("Hello, I am Kiran");
    },
    skills: ["Python", "Django", "MySQL"],
    address: {
        city: "Mumbai",
        state: "Maharashtra"
    }
};

let friend6 = {
    name: "Anjali",
    age: 20,
    isStudent: true,
    greet: function () {
        console.log("Hello, I am Anjali");
    },
    skills: ["HTML", "CSS", "Bootstrap"],
    address: {
        city: "Delhi",
        state: "Delhi"
    }
};

let friend7 = {
    name: "Vennala",
    age: 25,
    isStudent: false,
    greet: function () {
        console.log("Hello, I am Vennala");
    },
    skills: ["Node.js", "Express", "MongoDB"],
    address: {
        city: "Ballari",
        state: "Karnataka"
    }
};

let friend8 = {
    name: "Divya",
    age: 22,
    isStudent: true,
    greet: function () {
        console.log("Hello, I am Divya");
    },
    skills: ["React", "TypeScript", "JavaScript"],
    address: {
        city: "Kochi",
        state: "Kerala"
    }
};

let friend9 = {
    name: "Rohan",
    age: 23,
    isStudent: false,
    greet: function () {
        console.log("Hello, I am Rohan");
    },
    skills: ["C#", "ASP.NET", "SQL"],
    address: {
        city: "Jaipur",
        state: "Rajasthan"
    }
};

let friend10 = {
    name: "Bhavya",
    age: 21,
    isStudent: true,
    greet: function () {
        console.log("Hello, I am Meena");
    },
    skills: ["Python", "Machine Learning", "AI"],
    address: {
        city: "Coimbatore",
        state: "Tamil Nadu"
    }
};

console.log("Friend 1:",friend1);
friend1.greet() //hello I am Bhavana
console.log("-----------------------");
console.log("Friend 2:",friend2);
friend2.greet()
console.log("-----------------------");

// Accessing object properties
console.log(friend1.name);
console.log(friend2.age);
console.log(friend3.skills);
console.log(friend4.address.city);
console.log("-----------------------");

// Calling object functions
friend1.greet();
friend5.greet();
friend10.greet();