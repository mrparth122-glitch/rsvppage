const step1 = document.getElementById("step1");
const form = document.getElementById("rsvpForm");
const attendingField = document.getElementById("attendingField");
const attendingDetails = document.getElementById("attendingDetails");
const afterSubmit = document.getElementById("afterSubmit");
const redirectField = document.getElementById("redirectField");
const thanksMsg = document.getElementById("thanksMsg");

let isAttending = false;

// Make function available to inline onclick
window.attend = function (choice) {
  isAttending = choice;
  attendingField.value = choice ? "Yes" : "No";

  step1.style.display = "none";
  form.classList.remove("hidden");
  attendingDetails.style.display = choice ? "block" : "none";

  // For "No", optionally reset counts
  if (!choice) {
    const adults = document.getElementById("adults");
    const kids = document.getElementById("kids");
    adults.value = 0;
    kids.value = 0;
  }
};

// After submission, Formspark redirects back with ?submitted=1&attending=Yes/No
(function showThanksIfRedirected() {
  const params = new URLSearchParams(window.location.search);
  const submitted = params.get("submitted");
  const attending = params.get("attending");

  if (submitted === "1") {
    step1.style.display = "none";
    form.classList.add("hidden");

    if (attending === "No") {
      thanksMsg.textContent = "Thank you for letting us know 💖";
    } else {
      thanksMsg.textContent = "Thank you for your RSVP 💖";
    }

    afterSubmit.classList.remove("hidden");
  }
})();

// Before the normal HTML submit happens, set redirect URL with attending choice
form.addEventListener("submit", function () {
  const attending = attendingField.value || (isAttending ? "Yes" : "No");
  redirectField.value =
    "https://mrparth122-glitch.github.io/rsvppage/?submitted=1&attending=" +
    encodeURIComponent(attending);
});
