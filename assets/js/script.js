document.getElementById('calculateBtn').addEventListener('click', calculateAge);

function calculateAge() {
  const dayIn = document.getElementById('dayIn').value;
  const monthIn = document.getElementById('monthIn').value;
  const yearIn = document.getElementById('yearIn').value;

  const errorMessages = document.querySelectorAll('.error');
  errorMessages.forEach(msg => msg.textContent = '');

  let hasError = false;

  // Validaciones básicas de entradas
  if (!dayIn || isNaN(dayIn) || dayIn < 1 || dayIn > 31) {
    document.querySelector('input[placeholder="DD"]').nextElementSibling.textContent = "Invalid day";
    hasError = true;
  }
  if (!monthIn || isNaN(monthIn) || monthIn < 1 || monthIn > 12) {
    document.querySelector('input[placeholder="MM"]').nextElementSibling.textContent = "Invalid month";
    hasError = true;
  }
  if (!yearIn || isNaN(yearIn) || yearIn > new Date().getFullYear()) {
    document.querySelector('input[placeholder="YYYY"]').nextElementSibling.textContent = "Invalid year";
    hasError = true;
  }

  if (hasError) return;

  // Calcular la edad
  const birthDate = new Date(`${yearIn}-${monthIn}-${dayIn}`);
  const today = new Date();

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  // Ajustar si el mes o día aún no ha pasado en el año actual
  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
    ageMonths += (ageDays < 0) ? 11 : 12;
  }
  if (ageDays < 0) {
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += lastMonth.getDate();
  }

  // Mostrar resultado
  document.getElementById('yearOut').textContent = ageYears;
  document.getElementById('monthOut').textContent = ageMonths;
  document.getElementById('dayOut').textContent = ageDays;
}
