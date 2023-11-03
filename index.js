// Define the toggleMenu function to handle the navigation menu
function toggleMenu() {
  const links = document.getElementById("my-links");
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
}

// You can define other functions for specific pages here

// Example function for a specific page
function pageSpecificFunction() {
  // Add your code here for a specific page
}

// Call page-specific functions when the page loads
document.addEventListener("DOMContentLoaded", function () {
  // Check the current page and call the relevant function
  if (window.location.pathname === "/index.html") {
    // Call the function for the index.html page
    pageSpecificFunction();
  }
});

// You can add more functions as needed for other pages

// Example function for another specific page
function anotherPageSpecificFunction() {
  // Add your code here for another specific page
}
