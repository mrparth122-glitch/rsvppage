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

// Show RSVP section
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
};

// Set redirect before submit
form.addEventListener("submit", () => {
  redirectField.value =
    "https://mrparth122-glitch.github.io/rsvppage/?submitted=1&attending=" +
    encodeURIComponent(attendingField.value);
});
