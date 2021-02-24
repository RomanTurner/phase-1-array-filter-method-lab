// Code your solution here


let findMatching = (array, name) =>
  array.filter((target) => target.toLowerCase() === name.toLowerCase());


let fuzzyMatch = (array, partOfName) => array.filter((target) => target.substring(0,2) === partOfName); 


let matchName = (array, name) => array.filter((target) => target.name === name)
    

