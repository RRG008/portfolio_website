// Initialize a variable count to keep track of the state
let count = 0;

// Set up an interval to call the showNext function every 25000 milliseconds (25 seconds)
let time = setInterval(showNext, 25000);

// Defined the function showNext, which will handle switching between different sections
function showNext() {
    // Check the value of count modulo 4 to determine which section to show
    if (count % 4 === 0) { // If count is divisible by 4 with no remainder
        // Show the Education section
        edu_div = document.getElementsByClassName("Educationp")[0];
        edu_div.style.visibility = "visible";
        edu_div.style.height = "auto";
        about = document.getElementsByClassName("aboutspan")[0];
        about.innerHTML = 'Education'; // Change the text in the about span to "Education"
        aboutp = document.getElementsByClassName("aboutp")[0];
        aboutp.style.visibility = "hidden"; // Hide the paragraph in the "about" section
        aboutp.style.height = "0px"; // Set its height to 0 to hide it completely

    } else if (count % 4 === 1) { // If count leaves a remainder of 1 when divided by 4
        // Show the Skills section
        edu_div = document.getElementsByClassName("Educationp")[0];
        edu_div.style.visibility = "hidden"; // Hide the Education section
        edu_div.style.height = "0px"; // Set its height to 0 to hide it completely
        about = document.getElementsByClassName("aboutspan")[0];
        about.innerHTML = 'Skills'; // Change the text in the about span to "Skills"
        aboutp = document.getElementsByClassName("Skillsp")[0];
        aboutp.style.visibility = "visible"; // Show the paragraph in the "skills" section
        aboutp.style.height = "auto"; // Set its height to "auto" to display its full content

    } else if (count % 4 === 2) { // If count leaves a remainder of 2 when divided by 4
        // Show the Experience section
        edu_div = document.getElementsByClassName("Skillsp")[0];
        edu_div.style.visibility = "hidden"; // Hide the Skills section
        edu_div.style.height = "0px"; // Set its height to 0 to hide it completely
        about = document.getElementsByClassName("aboutspan")[0];
        about.innerHTML = 'Experience'; // Change the text in the about span to "Experience"
        aboutp = document.getElementsByClassName("experiencep")[0];
        aboutp.style.visibility = "visible"; // Show the paragraph in the "experience" section
        aboutp.style.height = "auto"; // Set its height to "auto" to display its full content
        
    } else if (count % 4 === 3) { // If count leaves a remainder of 3 when divided by 4
        // Show the About section
        edu_div = document.getElementsByClassName("experiencep")[0];
        edu_div.style.visibility = "hidden"; // Hide the Experience section
        edu_div.style.height = "0px"; // Set its height to 0 to hide it completely
        about = document.getElementsByClassName("aboutspan")[0];
        about.innerHTML = 'About'; // Change the text in the about span to "About"
        aboutp = document.getElementsByClassName("aboutp")[0];
        aboutp.style.visibility = "visible"; // Show the paragraph in the "about" section
        aboutp.style.height = "auto"; // Set its height to "auto" to display its full content
    }
    count++; // Increment the count for the next iteration
}
