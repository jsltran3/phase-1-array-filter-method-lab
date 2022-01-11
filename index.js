// Code your solution here
function findMatching(arr, driver) {
    // let arrLower = arr.map(driverName => driverName.toLowerCase()); 
    let specificDrivers = arr.filter(person => person.toLowerCase() === driver.toLowerCase()
    );
    return specificDrivers
  }; 

  function fuzzyMatch(arr, letter) {
    let beginLetter = arr.filter(driver => driver.toLowerCase().startsWith(letter.toLowerCase()) === true );
    return beginLetter 
  }; 

function matchName(arr, name){
    return arr.filter(driver => driver.name === name)
}