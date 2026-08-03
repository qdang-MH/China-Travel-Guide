
"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const defaults = [1800, 2300, 450, 350, 900, 450, 150, 500];
  const inputs = [...document.querySelectorAll("[data-budget]")];
  const total = document.querySelector("#budget-total");
  const group = document.querySelector("#budget-group");
  const reset = document.querySelector("#budget-reset");

  const format = n => new Intl.NumberFormat("en-US", {style:"currency", currency:"USD", maximumFractionDigits:0}).format(n);

  function update() {
    const sum = inputs.reduce((acc, input) => acc + (Number(input.value) || 0), 0);
    total.textContent = format(sum);
    group.textContent = format(sum * 5);
    localStorage.setItem("chinaTripBudget", JSON.stringify(inputs.map(i => i.value)));
  }

  const saved = JSON.parse(localStorage.getItem("chinaTripBudget") || "null");
  if (Array.isArray(saved) && saved.length === inputs.length) {
    inputs.forEach((input, i) => input.value = saved[i]);
  }
  inputs.forEach(input => input.addEventListener("input", update));
  reset.addEventListener("click", () => {
    inputs.forEach((input, i) => input.value = defaults[i]);
    update();
  });
  update();
});
