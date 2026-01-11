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

form.addEventListener("submit", function (e) {
  e.preventDefault(); // ⛔ STOP page redirect

  const formData = new FormData(form);

  fetch("https://formspree.io/f/mpqqanwl", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json"
    }
  })
  .then(response => {
    if (response.ok) {
      form.classList.add("hidden");

      if (isAttending) {
        afterSubmit.classList.remove("hidden");
      } else {
        afterSubmit.innerHTML = "<p>Thank you for letting us know 💖</p>";
        afterSubmit.classList.remove("hidden");
      }
    } else {
      alert("Something went wrong. Please try again.");
    }
  })
  .catch(() => {
    alert("Submission failed. Please check your connection.");
  });
});
