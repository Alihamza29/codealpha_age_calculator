function calculateAge() {
  const birthInput = document.getElementById("birthDate").value;
  if (!birthInput) {
    document.getElementById("result").innerText = "Please select your birth date.";
    return;
  }

  const birthDate = new Date(birthInput);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // Adjust if necessary
  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById("result").innerText = 
    `You are ${years} years, ${months} months, and ${days} days old.`;
}
