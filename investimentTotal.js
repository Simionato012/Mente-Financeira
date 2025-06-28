let investmentChart = null;

document.getElementById("simulate-button1").addEventListener("click", () => {
  const initialAmount = parseFloat(document.getElementById("initial-amount").value);
  const interestRate = parseFloat(document.getElementById("interest-rate").value) / 100;
  const months = parseInt(document.getElementById("months").value);
  const monthlyInvestment = parseFloat(document.getElementById("monthlyInvestment").value);

  if (isNaN(initialAmount) || isNaN(interestRate) || isNaN(months)) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
  }

  let balance = initialAmount;
  const balances = [balance];
  for (let i = 1; i <= months; i++) {
      balance += balance * interestRate + monthlyInvestment;
      balances.push(balance);
  }

  const ctx = document.getElementById("investmentChart").getContext("2d");

  if (investmentChart !== null) {
      investmentChart.destroy();
  }

  investmentChart = new Chart(ctx, {
      type: "line",
      data: {
          labels: Array.from({ length: months + 1 }, (_, i) => `Mês ${i}`),
          datasets: [{
              label: "Evolução do Saldo (R$)",
              data: balances,
              backgroundColor: "rgba(0, 123, 255, 0.2)",
              borderColor: "#007bff",
              borderWidth: 2,
          }],
      },
      options: {
          responsive: true,
          plugins: {
              legend: {
                  position: "top",
              },
          },
      },
  });
});