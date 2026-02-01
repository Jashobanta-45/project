function bookTicket(btn, eventName) {
  if (btn.classList.contains("booked")) return;

  btn.innerText = "Booked ✔";
  btn.classList.add("booked");
  btn.disabled = true;

  alert("Selected: " + eventName + " | Time: 7:00 PM | Price: ₹299");
}

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const event = document.getElementById("event").value;
  const tickets = document.getElementById("tickets").value;

  if (!name || !email || !event || !tickets) {
    alert("Please fill all fields ❌");
    return false;
  }

  alert("Booking Successful 🎉");
  return false;
}

function goToBooking(eventName) {
  localStorage.setItem("selectedEvent", eventName);
  window.location.href = "booking.html";
}

window.onload = function () {
  const selectedEvent = localStorage.getItem("selectedEvent");
  const eventSelect = document.getElementById("event");

  if (selectedEvent && eventSelect) {
    eventSelect.value = selectedEvent;
  }
};

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const event = document.getElementById("event").value;
  const tickets = document.getElementById("tickets").value;

  if (!name || !email || !event || !tickets) {
    alert("Please fill all fields ❌");
    return false;
  }

  alert("🎉 Booking Confirmed for " + event + "!");
  return false; // demo
}
