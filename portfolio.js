
function myFunction() {
   let mobileView = document.getElementById('myNavbar');
   if (mobileView.className === "navbar") {
      mobileView.className += " responsive"
   }else {
      mobileView.className ="navbar"
   }
}