const step1 = document.getElementById("step1");
const form = document.getElementById("rsvpForm");
const attendingField = document.getElementById("attendingField");
const attendingDetails = document.getElementById("attendingDetails");
const afterSubmit = document.getElementById("afterSubmit");

let isAttending = false;

function attend(choice) {
  isAttending = choice;
  attendingField.value = choice ? "Yes" : "No";

  step1.style.display = "none";
  form.classList.remove("hidden");

  attendingDetails.style.display = choice ? "block" : "none";
}

/* Handle submit */
form.addEventListener("submit", function () {
  // Let Formspree submit normally
  // Then show thank-you + calendar link (only if YES)

  setTimeout(() => {
    form.classList.add("hidden");

    if (isAttending) {
      afterSubmit.classList.remove("hidden");
    } else {
      afterSubmit.innerHTML = "<p>Thank you for letting us know 💖</p>";
      afterSubmit.classList.remove("hidden");
    }
  }, 300);
});
