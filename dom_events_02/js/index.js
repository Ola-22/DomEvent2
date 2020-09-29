// Here you can access the colors variable
// have fun

const btn = document.querySelector('div.control > button'),
    pallete = document.querySelector('#pallete'),
    hexa = document.querySelector('div.control > label');

btn.addEventListener('click', function() {
    //Clicking `choose random color` should choose a random color from `colors` array
    var styleColor = pallete.style.background = colors[Math.floor(Math.random() * colors.length)];
    //End

    // Insert the random hexa color code inside the `input` programaticly when the user click on `choose random color`
    inputColor.value = styleColor;

    //apply the color to the input font when the use type a hexa color
    hexa.style.color = styleColor;
    //End
});

//change the color of `#pallete` div based on the `#color` input value
const inputColor = document.querySelector('#color');
inputColor.onkeyup = function() {
    pallete.style.background = this.value;
    hexa.style.color = this.value;
}