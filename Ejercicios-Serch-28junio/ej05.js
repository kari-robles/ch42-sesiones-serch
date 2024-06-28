console.log("holix5");

// Write a command that prints out all of the people in the list.

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(people);

// Write the command to remove "Dani" from the array.

delete people[1];
console.log(people);

// Write the command to remove "Juan" from the array.

delete people[3];
console.log(people);

// Write the command to move "Luis" to the front of the array.

delete people[2];
console.log(people);
people.unshift('Luis');


// Write the command to add your name to the end of the array.

people.push('Kari');
console.log(people);

// Using a loop, iterate through this array and after console.log "Maria", exit from the loop.

for( let i = 0; i < people.length; i++ ){
    console.log(i, people[i] );
    if( people[i] === "Maria" ) break;        
}


// Write the command that gives the indexOf where "Maria" is located.

a = people.indexOf("Maria");
console.log(a);

console.log(people);

// At the end of the exercise, there should be 4 people in the array.




