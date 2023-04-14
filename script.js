function calculateBMI() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  // Hitung BMI
  const bmi = weight / Math.pow(height / 100, 2);

  // Tampilkan hasil
  let result = document.getElementById("result");
  if (bmi < 18.5) {
    result.innerHTML = `BMI = ${bmi.toFixed(2)} (Underweight)`;
  } else if (bmi < 25) {
    result.innerHTML = `BMI = ${bmi.toFixed(2)} (Normal weight)`;
  } else if (bmi < 30) {
    result.innerHTML = `BMI = ${bmi.toFixed(2)} (Overweight)`;
  } else {
    result.innerHTML = `BMI = ${bmi.toFixed(2)} (Obesity)`;
  }
}
