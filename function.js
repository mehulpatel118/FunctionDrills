
function getYearOfBirth(age)
{
    return 2019-age;
}
function createGreeting(name, age){
const yearOfBirth = 2019 - age;
return `Hi, my name is ${name} and I\'m ${age} years old. I was born in ${yearOfBirth}`;
}

const greeting1 = createGreeting('Chris', 30);
console.log(greeting1);
console.log(getYearOfBirth(30));