/*
  Write a function that returns a particular student when given a name. If no name matches, return `null`.
*/

function findStudentByName(students, name) {
  const theOne = students.find((student) => student.name === name);
  
  return theOne ? theOne : null;
}

module.exports = findStudentByName;
