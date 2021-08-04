function clearErrors() {
   errors = document.getElementsByClassName('formerror');
   for (let item of errors) {
      item.innerHTML = '';
   }
}

function seterror(id, error) {
   element = document.getElementById(id);
   element.getElementsByClassName('formerror')[0].innerHTML = error;
}

var form = document.getElementById('myForm');
var formSuccess = document.querySelector('.form-message');

function validateForm(e) {
   e.preventDefault();
   var returnval = true;

   if (returnval === true) {
      clearErrors();
   }
   var name = document.forms['myForm']['fname'].value;
   if (name.length < 5) {
      seterror('name', 'Length of name is too short');
      returnval = false;
   }

   var email = document.forms['myForm']['femail'].value;
   if (email.length > 15) {
      seterror('email', 'Email length is too long');
      returnval = false;
   }

   var phone = document.forms['myForm']['fphone'].value;
   if (phone.length != 10) {
      seterror('phone', 'phone number should be 10 digit');
      returnval = false;
   }

   var date = document.forms['myForm']['fDate'].value;
   var today = new Date();
   var birthDate = new Date(date);
   var age = today.getFullYear() - birthDate.getFullYear();
   var m = today.getMonth() - birthDate.getMonth();
   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
   }
   if (age < 18) {
      seterror('dob', "You're under age 18");
      returnval = false;
   }

   if (returnval) {
      form.reset();
      formSuccess.classList.remove('hide');
      formSuccess.classList.add('show');
   }

   return returnval;
}
