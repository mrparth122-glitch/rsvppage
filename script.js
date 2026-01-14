// ---------- Invite animation controls ----------
const inviteView = document.getElementById("inviteView");
const rsvpView = document.getElementById("rsvpView");
const envelope = document.getElementById("envelope");
const openInviteBtn = document.getElementById("openInviteBtn");
const rsvpBtn = document.getElementById("rsvpBtn");

if (openInviteBtn && envelope && rsvpBtn) {
  openInviteBtn.addEventListener("click", () => {
    envelope.classList.add("open");
    rsvpBtn.classList.remove("hidden");
  });

  rsvpBtn.addEventListener("click", () => {
    inviteView.classList.add("hidden");
    rsvpView.classList.remove("hidden");
  });
}

// ---------- RSVP logic ----------
const step1 = document.getElementById("step1");
const form = document.getElementById("rsvpForm");
const attendingField = document.getElementById("attendingField");
const attendingDetails = document.getElementById("attendingDetails");
const afterSubmit = document.getElementById("afterSubmit");
const redirectField = document.getElementById("redirectField");
const thanksMsg = document.getElementById("thanksMsg");

let isAttending = false;

// Make attend available to inline onclick
window.attend = function (choice) {
  isAttending = choice;
  attendingField.value = choice ? "Yes" : "No";

  step1.style.display = "none";
  form.classList.remove("hidden");

  attendingDetails.style.display = choice ? "block" : "none";

  // If "No", optionally set counts to 0
  if (!choice) {
    const adults = document.getElementById("adults");
    const kids = document.getElementById("kids");
    if (adults) adults.value = 0;
    if (kids) kids.value = 0;
  }
};

// After submission, Formspark redirects back with ?submitted=1&attending=Yes/No
(function showThanksIfRedirected() {
  const params = new URLSearchParams(window.location.search);
  const submitted = params.get("submitted");
  const attending = params.get("attending");

  if (submitted === "1") {
    // Ensure RSVP view is visible after redirect
    if (inviteView && rsvpView) {
      inviteView.classList.add("hidden");
      rsvpView.classList.remove("hidden");
    }

    // Hide step + form, show thank-you
    if (step1) step1.style.display = "none";
    if (form) form.classList.add("hidden");

    if (thanksMsg) {
      thanksMsg.textContent =
        attending === "No"
          ? "Thank you for letting us know 💖"
          : "Thank you for your RSVP 💖";
    }

    if (afterSubmit) afterSubmit.classList.remove("hidden");
  }
})();

// Before form submit, set redirect URL with attending choice
if (form && redirectField) {
  form.addEventListener("submit", function () {
    const attending = attendingField?.value || (isAttending ? "Yes" : "No");
    redirectField.value =
      "https://mrparth122-glitch.github.io/rsvppage/?submitted=1&attending=" +
      encodeURIComponent(attending);
  });
}
