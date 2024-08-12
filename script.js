console.log("Script running...")
// Task 1: Light & Dark Mode
// Select the '☀️' and '🌑' buttons
let light = document.querySelector("#lightMode")
let dark = document.querySelector("#darkMode")


// Select the body element
let body = document.body


// Add an event listener to the ☀️ button such that when it's clicked, the body's background color is lightyellow and text color is navy
light.addEventListener("click", function() {
  body.style.backgroundColor = "lightyellow"
  body.style.color = "navy"
})


// Add an event listener to the 🌑 button such that when it's clicked, the background and text colors are flipped (opposite of ☀️ mode)
dark.addEventListener("click", function() {
  body.style.backgroundColor = "navy"
  body.style.color = "lightyellow"
})


// Task 2: Image size
// Select the image
let img = document.querySelector("#pussInBoots")

// Add an event listener to the image such that when you move your mouse over it, the width changes to 110% 
img.addEventListener("mouseover", function() {
  img.style.width = "110%"
})

// Add an event listener to the image such that when you move your mouse off it, the width changes back to 100%
img.addEventListener("mouseout", function() {
  img.style.width = "80%"
})

// Task 3: Best school input
// Select the input and p tag 
let input = document.querySelector("#input")
let school = document.querySelector("#result")

// Add an event listener to the input such that when the user presses a key, if the input value is "CSH", change the p tag text to be "Correct" and the text color to be green. Else, change the text to be "Incorrect" and the text color to be red.
input.addEventListener("keypress", function() {
  if (input.value == "CSH") {
    school.textContent = "Correct!!!"
    school.style.color = "green"
  } else {
    school.textContent = "Incorrect..."
    school.style.color = "red"
  }
})


// Task 4: RGB
// Select the red h2
let red = document.querySelector("#red")

// Add an event listener to the red h2 such that when the mouse is over it, the text color changes to red and you add the active class to its class list
red.addEventListener("mouseover", function() {
  red.style.color = "red"
  red.classList.add("active")
})

// Add an event listener to the red h2 such that when the mouse is off it, the text color changes back to black and you remove the active class from its class list
red.addEventListener("mouseout", function() {
  red.style.color = "grey"
  red.classList.remove("active")
})

// Set up DOM manipulation code flows for green and blue h2s to do the same thing
let green = document.querySelector("#green")
let blue = document.querySelector("#blue")

green.addEventListener("mouseover", function() {
  green.style.color = "green"
  green.classList.add("active")
})

green.addEventListener("mouseout", function() {
  green.style.color = "grey"
  green.classList.remove("active")
})


blue.addEventListener("mouseover", function() {
  blue.style.color = "blue"
  blue.classList.add("active")
})

blue.addEventListener("mouseout", function() {
  blue.style.color = "grey"
  blue.classList.remove("active")
})

// Task 5: Font change
// Select the change font button
let font = document.querySelector("#font")

// In style.css, define a class called fancy where the font-family is set to "Lucida Handwriting", Lucida, cursive"
// Add an event listener such that when the font button is clicked, you toggle the fancy class on the body. It should alternate fonts when you click it!
font.addEventListener("click", function() {
  body.classList.toggle("fancy")
})

