const form = document.getElementById("rsvpForm");
const step1 = document.getElementById("step1");
const attendingField = document.getElementById("attendingField");

// Show form only if attending
function attend(choice) {
  if (choice) {
    attendingField.value = "Yes";
    step1.style.display = "none";
    form.style.display = "block";
  } else {
    attendingField.value = "No";
    form.style.display = "none";
    step1.innerHTML = "<h2>Thanks for letting us know 💖</h2>";
  }
}

// On submit, show thank you message (Formspree handles submission)
form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Submit the form manually to Formspree
  form.submit();

  step1.style.display = "none";
  form.style.display = "none";
  const card = document.querySelector(".card");
  card.innerHTML = "<h2>Thanks for letting us know 💖</h2>";
});
