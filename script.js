const step1 = document.getElementById("step1");
const form = document.getElementById("rsvpForm");
const attendingField = document.getElementById("attendingField");

// Show form only if attending
function attend(choice) {
  if (choice) {
    attendingField.value = "Yes";
    step1.style.display = "none";
    form.style.display = "block"; // show form
  } else {
    attendingField.value = "No";
    form.style.display = "none";
    step1.innerHTML = "<h2>Thanks for letting us know 💖</h2>";
  }
}
