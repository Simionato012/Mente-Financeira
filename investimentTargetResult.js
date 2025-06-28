document.getElementById("simulate-button2").addEventListener("click", () => {
  
  const initialAmount2 = parseFloat(document.getElementById("initial-amount2").value);
  const interestRate2 = parseFloat(document.getElementById("interest-rate2").value) / 100;
  const targetResult2 = parseInt(document.getElementById("targetResult2").value);
  const monthlyInvestment2 = parseFloat(document.getElementById("monthlyInvestment2").value);
  const finalResult = document.getElementById("finalResult");

  if (isNaN(initialAmount2) || isNaN(interestRate2) || isNaN(targetResult2)){
      alert("Por favor, preencha todos os campos corretamente.");
      return;
  }

  let balance = initialAmount2
  
  for (meses = 0; balance < targetResult2; meses++) {
    balance += balance * interestRate2 + monthlyInvestment2
  
  }

  finalResult.textContent = `Você precisa de aproximadamente ${meses} meses para atingir o seu objetivo.`
});

function resetCode2() {
  document.getElementById("initial-amount2").value = ''
  document.getElementById("interest-rate2").value = ''
  document.getElementById("targetResult2").value = ''
  document.getElementById("monthlyInvestment2").value = ''
  document.getElementById("finalResult").textContent = ''
}