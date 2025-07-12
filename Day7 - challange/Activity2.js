const person = {
  name: "venkat",
  age: 22,
  profession: "Student",
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};
console.log(person.name);       
console.log(person.age);
console.log(person.profession); 
person.greet();  

