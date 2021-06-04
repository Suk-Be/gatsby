export const ResetAllChanges = e => {
  e.preventDefault();
  const initialAmounts = [];
  const initialInput = [];

  const form = document.getElementById('input');
  const totalAmount = form.querySelectorAll('.product');
  const changeAmount = form.querySelectorAll('.amount-change');

  totalAmount.forEach(current =>
    initialAmounts.push(parseInt(current.dataset.productAmount, 10))
  );

  totalAmount.forEach((current, i) => {
    current.value = initialAmounts[i];
  });

  changeAmount.forEach(current =>
    initialInput.push(parseInt(current.dataset.productChangeAmount, 10))
  );

  changeAmount.forEach((current, i) => {
    current.value = initialInput[i];
  });
};
