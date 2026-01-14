document.addEventListener("DOMContentLoaded", () => {
  const previewView = document.getElementById("previewView");
  const rsvpView = document.getElementById("rsvpView");
  const showRsvpBtn = document.getElementById("showRsvpBtn");

  const step1 = document.getElementById("step1");
  const form = document.getElementById("rsvpForm");
  const attendingField = document.getElementById("attendingField");
  const attendingDetails = document.getElementById("attendingDetails");
  const afterSubmit = document.getElementById("afterSubmit");
  const redirectField = document.getElementById("redirectField");
  const thanksMsg = document.getElementById("thanksMsg");

  let isAttending = false;

  // Show RSVP section and hide preview permanently
  if (showRsvpBtn && previewView && rsvpView) {
    showRsvpBtn.addEventListener("click", () => {
      previewView.classList.add("hidden");
      rsvpView.classList.remove("hidden");
      rsvpView.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // Yes/No buttons
  window.attend = function (choice) {
    isAttending = choice;
    attendingField.value = choice ? "Yes" : "No";

    step1.style.display = "none";
    form.classList.remove("hidden");
    attendingDetails.style.display = choice ? "block" : "none";

    if (!choice) {
      const adults = document.getElementById("adults");
      const kids = document.getElementById("kids");
      if (adults) adults.value = 0;
      if (kids) kids.value = 0;
    }
  };

  // After redirect: show thank you + hide preview always
  (function showThanksIfRedirected() {
    const params = new URLSearchParams(window.location.search);
    const submitted = params.get("submitted");
    const attending = params.get("attending");

    if (submitted === "1") {
      if (previewView) previewView.classList.add("hidden");
      if (rsvpView) rsvpView.classList.remove("hidden");

      if (step1) step1.style.display = "none";
      if (form) form.classList.add("hidden");

      if (thanksMsg) {
        thanksMsg.textContent =
          attending === "No"
            ? "Thank you for letting us know 💖"
            : "Thank you for your RSVP 💖";
      }
      if (afterSubmit) afterSubmit.classList.remove("hidden");

      rsvpView.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  })();

  // Before submit: set redirect URL with attending choice
  if (form && redirectField) {
    form.addEventListener("submit", function () {
      const attending = attendingField?.value || (isAttending ? "Yes" : "No");
      redirectField.value =
        "https://mrparth122-glitch.github.io/rsvppage/?submitted=1&attending=" +
        encodeURIComponent(attending);
    });
  }
});
