const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  // Your code here
  event.preventDefault(); // Prevent the form from submitting and reloading the page
  const birthdayInput = document.querySelector('#exampleInputEmail1');
  const genderInput = document.querySelector('#exampleFormControlSelect1');

  const birthday = birthdayInput.value;
  const gender = genderInput.value;

  const date = new Date(birthday);
  const dayOfWeek = date.getDay();
  const month = date.getMonth();
  



});
