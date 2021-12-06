//CONTACT PAGE JS

//Datalist for autocomplete cities
function cityDataList() {
  var canadianCities = [
    'Toronto',
    'Montreal',
    'Vancouver',
    'Calgary',
    'Edmonton',
    'Ottawa',
    'Winnipeg',
    'Quebec City',
    'Hamilton',
    'Kitchener',
    'London',
    'Victoria',
    'Halifax',
    'Oshawa',
    'Windsor',
    'Regina',
    'St.Johns',
    'Barrie',
    'Scarborough',
    'St.Catherines',
    'Guelph',
    'Saskatoon',
    'Sudbury'
  ];
  var dataList = document.querySelector('#js-datalist');

  canadianCities.forEach(function(item) {
    // Create a new <option> element.
    var option = document.createElement('option');
    // Set the value using the item in the JSON array.
    option.value = item;
    // Add the <option> element to the <datalist>.
    dataList.appendChild(option);
  });
}

//Create products on page load
window.onload = function() {
  //Order issue reveal order number if checked
  var orderProblem = document.querySelector('#order-issue');
  var comment = document.querySelector('#comment');
  var question = document.querySelector('#question');
  orderProblem.addEventListener('click', function() {
    var orderNum = document.querySelector('.order-number');
    if (orderProblem.checked === true) {
      orderNum.setAttribute('id', 'show');
    }
  });

  comment.addEventListener('click', function() {
    var orderNum = document.querySelector('.order-number');
    orderNum.setAttribute('id', 'hide');
  });

  question.addEventListener('click', function() {
    var orderNum = document.querySelector('.order-number');
    orderNum.setAttribute('id', 'hide');
  });

  //Create datalist for city autocomplete
  cityDataList();

  //form validation
  var form = document.querySelector('#contact-form');
  var submitBtn = document.querySelector('#submit');
  var resetBtn = document.querySelector('#reset');

  resetBtn.onclick = () => {
    form.classList.remove('was-validated');
  };

  submitBtn.onclick = () => {
    form.classList.add('was-validated');
  };

  form.onsubmit = event => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  //validation for email using regex
  form['email'].oninput = () => {
    var email = form['email'].value;
    var r = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (r.test(email)) {
      form['email'].setCustomValidity('');
    } else {
      form['email'].setCustomValidity('Please enter a valid email.');
    }
  };

  //validation for postal code using regex
  form['postal-code'].oninput = () => {
    var postalCode = form['postal-code'].value;
    var r = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    if (r.test(postalCode)) {
      form['postal-code'].setCustomValidity('');
    } else {
      form['postal-code'].setCustomValidity('Please input a valid Canadian postal code.');
    }
  };
};
