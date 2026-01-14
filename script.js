const showRsvpBtn = document.getElementById("showRsvpBtn");
const previewView = document.getElementById("previewView");
const rsvpView = document.getElementById("rsvpView");

const step1 = document.getElementById("step1");
const form = document.getElementById("rsvpForm");
const attendingField = document.getElementById("attendingField");
const attendingDetails = document.getElementById("attendingDetails");
const afterSubmit = document.getElementById("afterSubmit");
const redirectField = document.getElementById("redirectField");

const adultsField = document.getElementById("adultsField");
const kidsField = document.getElementById("kidsField");

let isAttending = null; // true/false

// ✅ Handle redirect after submit
(function handleRedirectThankYou() {
  const params = new URLSearchParams(window.location.search);
  const submitted = params.get("submitted");
  const attending = params.get("attending");

  if (submitted === "1") {
    previewView.classList.add("hidden");
    rsvpView.classList.remove("hidden");

    if (step1) step1.style.display = "none";
    if (form) form.classList.add("hidden");

    if (afterSubmit) {
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
  }
})();

// Show RSVP section
showRsvpBtn.addEventListener("click", () => {
  previewView.classList.add("hidden");
  rsvpView.classList.remove("hidden");
  rsvpView.scrollIntoView({ behavior: "smooth" });
});

// ✅ Yes/No selection
window.attend = function (choice) {
  isAttending = choice;
  attendingField.value = choice ? "Yes" : "No";

  step1.style.display = "none";
  form.classList.remove("hidden");

  if (choice) {
    // YES: show fields and enable them
    attendingDetails.style.display = "grid";
    adultsField.disabled = false;
    kidsField.disabled = false;

    // set safe defaults
    if (!adultsField.value) adultsField.value = 1;
    if (!kidsField.value) kidsField.value = 0;
  } else {
    // NO: hide fields and disable them so they never block submit
    attendingDetails.style.display = "none";

    adultsField.value = 0;
    kidsField.value = 0;

    adultsField.disabled = true;
    kidsField.disabled = true;
  }
};

// ✅ Set redirect before submit (so thank-you works)
form.addEventListener("submit", () => {
  const attendingValue = attendingField.value || (isAttending ? "Yes" : "No");
  redirectField.value =
    "https://mrparth122-glitch.github.io/rsvppage/?submitted=1&attending=" +
    encodeURIComponent(attendingValue);
});
