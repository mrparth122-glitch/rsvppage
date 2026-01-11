const step1 = document.getElementById("step1");
const form = document.getElementById("rsvpForm");
const attendingField = document.getElementById("attendingField");
const attendingDetails = document.getElementById("attendingDetails");
const thanks = document.getElementById("thanks");

function attend(choice) {
  attendingField.value = choice ? "Yes" : "No";
  step1.style.display = "none";
  form.style.display = "block";

  // Show adults/kids only if Yes
  if (choice) {
    attendingDetails.style.display = "block";
  } else {
    attendingDetails.style.display = "none";
  }
}
