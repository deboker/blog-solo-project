/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    let links = document.getElementById("my-links");
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  }
  
  const viewMoreBtn = document.getElementById("view-more")
  let news = 
  
  viewMoreBtn.addEventListener("click", function(){
      displayNews()
  })
  
  function displayNews() {
      Array.from(document.getElementsByClassName("news-recent")).forEach(element => element.classList.add('display'))
  }