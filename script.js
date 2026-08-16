document.addEventListener("DOMContentLoaded", function () {

  /* =====================================================
     BALLOW CONNECT
     MAIN WEBSITE SCRIPT
  ===================================================== */


  /* =====================================================
     MOBILE NAVIGATION
  ===================================================== */

  const menuToggle =
    document.getElementById("menuToggle");

  const mainNav =
    document.getElementById("mainNav");


  if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

      mainNav.classList.toggle("active");

    });


    const navLinks =
      mainNav.querySelectorAll("a");


    navLinks.forEach(function (link) {

      link.addEventListener("click", function () {

        mainNav.classList.remove("active");

      });

    });

  }


  /* =====================================================
     FLIGHT BOOKING FORM
  ===================================================== */

  const flightForm =
    document.getElementById("flightForm");


  if (flightForm) {

    flightForm.addEventListener("submit", function (event) {

      event.preventDefault();


      const inputs =
        flightForm.querySelectorAll("input");


      const from =
        inputs[0] ? inputs[0].value.trim() : "";

      const to =
        inputs[1] ? inputs[1].value.trim() : "";

      const departure =
        inputs[2] ? inputs[2].value : "";


      const passengerSelect =
        flightForm.querySelector("select");


      const passengers =
        passengerSelect
          ? passengerSelect.value
          : "1 Passenger";


      if (!from || !to || !departure) {

        alert(
          "Please enter your departure city, destination and travel date."
        );

        return;

      }


      const message =
        "Hello Ballow Connect,%0A%0A" +
        "I would like to make a flight enquiry.%0A%0A" +
        "From: " + encodeURIComponent(from) + "%0A" +
        "To: " + encodeURIComponent(to) + "%0A" +
        "Departure: " + encodeURIComponent(departure) + "%0A" +
        "Passengers: " + encodeURIComponent(passengers) +
        "%0A%0APlease send me the available flight options and prices.";


      const whatsappURL =
        "https://wa.me/2347030457948?text=" +
        message;


      window.open(
        whatsappURL,
        "_blank"
      );

    });

  }


  /* =====================================================
     TRIP TYPE BUTTONS
  ===================================================== */

  const tripButtons =
    document.querySelectorAll(".trip-tabs button");


  tripButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      tripButtons.forEach(function (item) {

        item.classList.remove("active");

      });


      button.classList.add("active");

    });

  });


  /* =====================================================
     CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
  ===================================================== */

  document.addEventListener("click", function (event) {

    if (!mainNav || !menuToggle) {
      return;
    }


    const clickedInsideNav =
      mainNav.contains(event.target);

    const clickedMenuButton =
      menuToggle.contains(event.target);


    if (
      !clickedInsideNav &&
      !clickedMenuButton
    ) {

      mainNav.classList.remove("active");

    }

  });


  /* =====================================================
     CURRENT YEAR
  ===================================================== */

  const yearElements =
    document.querySelectorAll("[data-year]");


  yearElements.forEach(function (element) {

    element.textContent =
      new Date().getFullYear();

  });


  /* =====================================================
     PAGE LOADED
  ===================================================== */

  console.log(
    "Ballow Connect website loaded successfully."
  );

});
```
