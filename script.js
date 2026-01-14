const step1 = document.getElementById("step1");
const form = document.getElementById("rsvpForm");
const attendingField = document.getElementById("attendingField");
const attendingDetails = document.getElementById("attendingDetails");
const afterSubmit = document.getElementById("afterSubmit");

let isAttending = false;

// Make attend available to inline onclick
window.attend = function (choice) {
  isAttending = choice;
  attendingField.value = choice ? "Yes" : "No";

  step1.style.display = "none";
  form.classList.remove("hidden");

  attendingDetails.style.display = choice ? "block" : "none";
};

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  // Build JSON payload from the form fields
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  try {
    const res = await fetch("https://submit-form.com/7OshMYxJq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    // Helpful debug info
    const text = await res.text();
    console.log("Formspark status:", res.status);
    console.log("Formspark raw response:", text);

    if (!res.ok) {
      alert("Something went wrong. Please try again.");
      return;
    }

    form.classList.add("hidden");
    if (isAttending) {
      afterSubmit.classList.remove("hidden");
    } else {
      afterSubmit.innerHTML = "<p>Thank you for letting us know 💖</p>";
      afterSubmit.classList.remove("hidden");
    }

  } catch (err) {
    console.error("Submission failed:", err);
    alert("Submission failed. Please check your connection.");
  }
});
