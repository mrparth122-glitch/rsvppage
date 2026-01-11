const step1 = document.getElementById("step1");
const form = document.getElementById("rsvpForm");
const attendingField = document.getElementById("attendingField");
const attendingDetails = document.getElementById("attendingDetails");

function attend(choice) {
  // Set attending hidden field
  attendingField.value = choice ? "Yes" : "No";

  // Hide Yes/No buttons
  step1.style.display = "none";

  // Show form
  form.style.display = "block";

  // Show Adults/Kids fields only if attending
  attendingDetails.style.display = choice ? "block" : "none";
}
