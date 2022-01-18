function welcome (firstName, lastName) {
  let fullName = `${firstName} ${lastName}`

  if(!firstName && !lastName){

    console.error("fullName is not defined");
  } else {
    
    function displayFullName() {
      alert(`Welcome ${fullName}!`)
    }
  }
  
  displayFullName()
}
