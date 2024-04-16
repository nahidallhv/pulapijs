fetch("https://v6.exchangerate-api.com/v6/f98a76c98a7aa6bc56e5df65/latest/AZN")
  .then((response) => response.json())
  .then((data) => {
    let valyutalar = Object.keys(data.conversion_rates);
    let menu = document.getElementById("valyuta");
    valyutalar.map((valyuta) => {
      let option = document.createElement("option");
      option.text = valyuta;
      option.value = valyuta;
      menu.add(option);
    });
  });
function pulcevirici() {
  let amount = document.getElementById("amount").value;
  let valyuta = document.getElementById("valyuta").value;
  fetch("https://v6.exchangerate-api.com/v6/f98a76c98a7aa6bc56e5df65/latest/AZN")
    .then((response) => response.json())
    .then((data) => {
      let sonpul = amount * data.conversion_rates[valyuta]; 
      document.getElementById("result").innerText =
        amount + " AZN = " + sonpul.toFixed(2) + " " + valyuta;
    })
}
