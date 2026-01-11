const step1 = document.getElementById("step1");
const form = document.getElementById("rsvpForm");
const attendingField = document.getElementById("attendingField");
const attendingDetails = document.getElementById("attendingDetails");
const thanks = document.getElementById("thanks");

function attend(choice) {
  // Set hidden attending field
  attendingField.value = choice ? "Yes" : "No";

  // Hide step 1 buttons
  step1.style.display = "none";

  // Show form
  form.style.display = "block";

  // Show adults/kids only if attending
  attendingDetails.style.display = choice ? "block" : "none";
}
