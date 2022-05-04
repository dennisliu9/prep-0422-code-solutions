const person = {
  firstName: 'Dexter',
  lastName: 'Boygenius',
  hobby: 'Experimenting'
};
console.log('person: ', person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: ", fullName);

person.job = 'Scientist';
console.log("The person's current job is: ", person.job);

person.previousJob = 'Student';
console.log("The person's previous job was: ", person.previousJob);

console.log('The complete person object is: ', person);
