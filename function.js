'use strict';
function getYearOfBirth(age)
{
  if (age < 0)
  {
    throw new Error ('Age can not be negative')
  }
  return 2019-age;
}

function createGreeting(name, age){
  if(name === undefined)
  {
    throw new Error ('name must be defined');
  }
  if(age === undefined)
  {
    throw new Error ('age must be defined');
  }
  console.log(typeof(age));
  if(typeof(name)!== 'string')
  {
    throw new TypeError('name is not a string');
  }

  if(typeof(age)!== 'number')
  {
    throw new TypeError('Age is not a number');
  }

  let yob = getYearOfBirth(age);
  return `Hi, my name is ${name} and I\'m ${age} years old. I was born in ${yob}`;
}



try {
  const greeting1 = createGreeting('bill','bill');
  console.log(greeting1);

}
catch (e)
{
  console.log(e.message);
}