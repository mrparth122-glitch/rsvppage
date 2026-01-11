const form = document.getElementById("rsvpForm");
let attending = false;

function attend(choice) {
  attending = choice;

  if (choice) {
    document.getElementById("step1").classList.add("hidden");
    form.classList.remove("hidden");
  } else {
    submitNo();
  }
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    attending: "Yes",
    first: document.getElementById("firstName").value,
    last: document.getElementById("lastName").value,
    adults: document.getElementById("adults").value,
    kids: document.getElementById("kids").value
  };

  sendData(data);
});

function submitNo() {
  sendData({ attending: "No" });
}

function sendData(data) {
  // For demo, we just show thank you message
  // Later, you can integrate Google Sheets or Formspree
  document.querySelector(".card").innerHTML =
    "<h2>Thanks for letting us know 💖</h2>";

  console.log("RSVP Data Submitted:", data);
}
