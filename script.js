document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("medicineForm");
  const list = document.getElementById("reminderList");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("medicineName").value;
    const time = document.getElementById("reminderTime").value;

    const li = document.createElement("li");
    li.textContent = `${name} – Reminder set for ${time}`;
    list.appendChild(li);

    alert(`Reminder set for ${name} at ${time}`);
    form.reset();
  });
});

