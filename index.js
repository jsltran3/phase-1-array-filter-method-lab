// Code your solution here
function findMatching(arr, driver) {
    // let arrLower = arr.map(driverName => driverName.toLowerCase()); 
    let specificDrivers = arr.filter(person => person.toLowerCase() === driver.toLowerCase()
    );
    return specificDrivers
  }; 

  function fuzzyMatch(arr, letter) {
    let approx = arr.filter(function (letter) {
      if (arr.includes(letter) === true) {
        return approx
      }
    })
    // let specificDrivers = arr.filter(approx => approx.toLowerCase())
    };