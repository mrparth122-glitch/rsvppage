const step1 = document.getElementById("step1");
const form = document.getElementById("rsvpForm");
const attendingField = document.getElementById("attendingField");
const attendingDetails = document.getElementById("attendingDetails");

function attend(choice) {
  // Set hidden value
  attendingField.value = choice ? "Yes" : "No";

  // Hide the Yes/No buttons
  step1.style.display = "none";

  // Show the form
  form.style.display = "block";

  // Show Adults/Kids only if attending
  attendingDetails.style.display = choice ? "block" : "none";
}
