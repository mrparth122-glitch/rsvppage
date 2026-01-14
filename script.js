const showRsvpBtn = document.getElementById("showRsvpBtn");
const previewView = document.getElementById("previewView");
const rsvpView = document.getElementById("rsvpView");

const step1 = document.getElementById("step1");
const form = document.getElementById("rsvpForm");
const attendingField = document.getElementById("attendingField");
const attendingDetails = document.getElementById("attendingDetails");
const afterSubmit = document.getElementById("afterSubmit");
const redirectField = document.getElementById("redirectField");

let isAttending = false;

// ✅ On page load: if redirected back after submit, show thank-you view
(function handleRedirectThankYou() {
  const params = new URLSearchParams(window.location.search);
  const submitted = params.get("submitted");     // "1"
  const attending = params.get("attending");     // "Yes" or "No"

  if (submitted === "1") {
    // Hide preview, show RSVP section
    previewView.classList.add("hidden");
    rsvpView.classList.remove("hidden");

    // Hide choices + form, show thank you
    if (step1) step1.style.display = "none";
    if (form) form.classList.add("hidden");

    if (afterSubmit) {
      // Customize message for "No"
      if (attending === "No") {
        afterSubmit.innerHTML = `<p>Thank you for letting us know 💖</p>`;
      } else {
        afterSubmit.innerHTML = `
          <p>Thank you for your RSVP 💖</p>
          <a href="/rsvppage/mansi-baby-shower.ics" class="calendar-btn">
            📅 Add Event to Your Calendar
          </a>
        `;
      }
      afterSubmit.classList.remove("hidden");
    }

    // Optional: scroll into view nicely
    rsvpView.scrollIntoView({ behavior: "smooth", block: "start" });
  }
})();

// Show RSVP section when user clicks RSVP Now
showRsvpBtn.addEventListener("click", () => {
  previewView.classList.add("hidden");
  rsvpView.classList.remove("hidden");
  rsvpView.scrollIntoView({ behavior: "smooth" });
});

// Yes / No logic
window.attend = function (choice) {
  isAttending = choice;
  attendingField.value = choice ? "Yes" : "No";

  step1.style.display = "none";
  form.classList.remove("hidden");
  attendingDetails.style.display = choice ? "grid" : "none";

  // If No, set counts to 0 (optional)
  if (!choice) {
    const adultsInput = document.querySelector('input[name="adults"]');
    const kidsInput = document.querySelector('input[name="kids"]');
    if (adultsInput) adultsInput.value = 0;
    if (kidsInput) kidsInput.value = 0;
  }
};

// Set redirect before submit so we come back with submitted=1 and attending=Yes/No
form.addEventListener("submit", () => {
  const attendingValue = attendingField.value || (isAttending ? "Yes" : "No");
  redirectField.value =
    "https://mrparth122-glitch.github.io/rsvppage/?submitted=1&attending=" +
    encodeURIComponent(attendingValue);
});
