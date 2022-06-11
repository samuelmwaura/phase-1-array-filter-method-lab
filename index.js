// Code your solution here
const findMatching=(driversNames,string)=>{
const matchedDrivers = driversNames.filter(name=>{ // name represents a single element in the array.
if(string === name){
    return true; //  for filter, the callback is always expected to return a boolean.
}else if(string.substring(1) === name.substring(1)){   // Substring removes the first letter and compares the rest. Awesome.
    return true;
}
});
return matchedDrivers;
}

const fuzzyMatch=(driversNames,string)=>{
const matchedDrivers = driversNames.filter(name=>{  // newArray is returned with elements that qualify.
return name.toUpperCase().indexOf(string.toUpperCase()) === 0;    // First the element of  the array is converted 
});                                                               // to uppercase and the provided string too.Then the two are compared.
return matchedDrivers;
}


const matchName =(driversNames, string)=>{
const matchedDrivers = driversNames.filter(name=>{
return name.name.toUpperCase()=== string.toUpperCase();
});
return matchedDrivers;
}