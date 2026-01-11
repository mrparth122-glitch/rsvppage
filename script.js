/* Background image for the page */
body {
  font-family: Arial, sans-serif;
  background-image: url('background.jpg'); /* replace with your local image file */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

/* Card styling */
.card {
  background-color: rgba(255, 255, 255, 0.95); /* semi-transparent white for readability */
  padding: 2em;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.2);
  text-align: center;
  width: 90%;
  max-width: 400px;
}

/* Event subtitle styling */
.event-subtitle {
  font-size: 1em;
  color: #ff5722;
  margin: 0.3em 0 1em 0;
}

/* Buttons */
button {
  padding: 0.8em 1em;
  margin: 0.5em 0;
  border: none;
  border-radius: 8px;
  background-color: #ff7f50;
  color: white;
  cursor: pointer;
  font-size: 1em;
  width: 80%;
  max-width: 250px;
}

button:hover {
  background-color: #ff5722;
}

/* Inputs and labels */
input, label {
  display: block;
  width: 90%;
  margin: 0.5em auto;
  padding: 0.5em;
  font-size: 1em;
}

/* Hide elements initially */
.hidden {
  display: none;
}

/* Mobile responsiveness */
@media (max-width: 500px) {
  .card {
    padding: 1.5em;
  }
  button {
    width: 100%;
  }
  input {
    width: 95%;
  }
}
