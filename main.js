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
  
  let akranName = '';
  
  if (gender === 'male') {
    if (dayOfWeek === 0) {
      akranName = 'Kwasi';
    } else if (dayOfWeek === 1) {
      akranName = 'Kwadwo';
    } else if (dayOfWeek === 2) {
      akranName = 'Kwabena';
    } else if (dayOfWeek === 3) {
      akranName = 'Kwaku';
    } else if (dayOfWeek === 4) {
      akranName = 'Yaw';
    } else if (dayOfWeek === 5) {
      akranName = 'Kofi';
    } else if (dayOfWeek === 6) {
      akranName = 'Kwame';
    }
  } else if (gender === 'female') {
    if (dayOfWeek === 0) {
      akranName = 'Akosua';
    } else if (dayOfWeek === 1) {
      akranName = 'Adwoa';
    } else if (dayOfWeek === 2) {
      akranName = 'Abenaa';
    } else if (dayOfWeek === 3) {
      akranName = 'Akua';
    } else if (dayOfWeek === 4) {
      akranName = 'Yaa';
    } else if (dayOfWeek === 5) {
      akranName = 'Afua';
    } else if (dayOfWeek === 6) {
      akranName = 'Ama';
    }
  }
  const akranNameElement = document.createElement('p');
  akranNameElement.textContent = `Your Akran name is ${akranName}.`;
  console.log(akranName);
  form.appendChild(akranNameElement);
});
