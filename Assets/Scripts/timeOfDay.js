(function () {
   const date = new Date();
   const hour = date.getHours();
   if (hour > 20) {
      document.getElementById("greeting").innerHTML = "Good Night Fellow Web Traveler";
   }
   else if (hour >= 0 && hour <= 4) {
      document.getElementById("greeting").innerHTML = "Good Night Fellow Web Traveler";
   }
   else if (hour > 17) {
      document.getElementById("greeting").innerHTML = "Good Evening Fellow Web Traveler";
   }
   else if (hour > 11) {
      document.getElementById("greeting").innerHTML = "Good Afternoon Fellow Web Traveler";
   }
   else if (hour < 12 && hour > 4) {
      document.getElementById("greeting").innerHTML = "Good Morning Fellow Web Traveler";
   } else {
      document.getElementById("greeting").innerHTML = "Hello Fellow Web Traveler";
      console.log("Something Exploded...");
   }
   
}) ()