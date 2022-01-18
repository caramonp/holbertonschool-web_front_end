const changeMode = (size, weight, transform, background, color) => {
  
  const body = document.querySelector('body');  

  console.log(body.style);
  
  return ( () => {
    return (
      body.style.fontSize = `${size}px`,
      body.style.fontWeight = weight,
      body.style.textTransform = transform,
      body.style.backgroundColor = background,
      body.style.color = color
    )
  })
}

const main = () => {
  let spooky = changeMode(9, "bold", "uppercase", "pink", "green")
  let darkMode = changeMode(12 , "bold", "capitalize", "black", "white")
  let screemMode = changeMode( 12, "normal", "lowercase", "white", "black")


  let paragraph = document.createElement('p')
  paragraph.innerHTML = "Welcome Holberton!"
  document.body.appendChild(paragraph)

  let button = document.createElement('button')
  button.innerHTML = 'Spooky'
  document.body.appendChild(button)

  let buttonDark = document.createElement('button')
  buttonDark.innerHTML = 'Dark mode'
  document.body.appendChild(buttonDark)

  let buttonScream = document.createElement('button')
  buttonScream.innerHTML = ' Scream mode'
  document.body.appendChild(buttonScream)

  button.addEventListener("click", spooky)
  buttonDark.addEventListener("click", darkMode)
  buttonScream.addEventListener("click", screemMode)

}

main()