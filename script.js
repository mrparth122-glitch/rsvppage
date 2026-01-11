const step1 = document.getElementById("step1");
const form = document.getElementById("rsvpForm");
const attendingField = document.getElementById("attendingField");
const thanks = document.getElementById("thanks");

// Show form only if attending
function attend(choice) {
  if (choice) {
    attendingField.value = "Yes";
    step1.style.display = "none";
    form.style.display = "block";
  } else {
    attendingField.value = "No";
    form.style.display = "none";
    step1.style.display = "none";
    thanks.textContent = "Thanks for letting us know 💖";
    thanks.style.display = "block";
  }
}
