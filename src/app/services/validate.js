
function isNumberKey(event)
{
   var key_code = (event.which) ? event.which : event.key_code
   if (key_code > 31 && (key_code < 48 || key_code > 57)){
    return false;
   }
   else {
    return true;
   }
         
}
var front_credit_card = document.getElementById('front_credit_card');
var back_credit_card = document.getElementById('back_credit_card');

function showFrontCrediCard() {
  front_credit_card.classList.remove('hide');
  back_credit_card.classList.add('hide');
}
// ------------- Control Mesage Feedback and Format value to user ------------- //

// ------- NUMBER CREDIT CARD ------- //

var input_number_credit_card = document.getElementById('number_credit_card');
var msg_number_credit_card = document.getElementById('msg_number_credit_card');
var show_number_credit_card = document.getElementById('show_number_credit_card');


input_number_credit_card.addEventListener('blur', function(event) { 
  
  if ((input_number_credit_card.value).length == 16) {
    var format_value_after_blur = input_number_credit_card.value.toString().match(/.{4}/g).join(' ');
    input_number_credit_card.value = format_value_after_blur;
    front_credit_card.classList.remove('front-credit-card');
    front_credit_card.classList.add('front-credit-card-active');

  }
  else {
    input_number_credit_card.classList.add('invalid');
    if ((input_number_credit_card.value).length == 0) {
      msg_number_credit_card.setAttribute('data-error','Por favor, digite o número do cartão!');
    }
    else {
      msg_number_credit_card.setAttribute('data-error','Número de cartão inválido');
    }
      show_number_credit_card.innerHTML = '**** **** **** ****';
      front_credit_card.classList.add('front-credit-card');
      front_credit_card.classList.remove('front-credit-card-active');      
  }
  
})

input_number_credit_card.addEventListener('focus', function(event) { 

    var format_value_after_focus = input_number_credit_card.value.toString().replace(/\s/g, '');
    input_number_credit_card.value = format_value_after_focus;
    
    showFrontCrediCard();
})

function actionNumberCreditCard(event) {

  show_number_credit_card.innerHTML = input_number_credit_card.value;

}

// ------- END NUMBER CREDIT CARD ------- //

// ------- NAME -------

var input_name_credit_card = document.getElementById('name_credit_card');
var show_name_credit_card = document.getElementById('show_name_credit_card');

input_name_credit_card.addEventListener('blur', function(event) {


  if ((input_name_credit_card.value).toString().match(/([a-zA-Z]+\s?\b){2,}/)) {
    
  }
  else {
    input_name_credit_card.classList.add('invalid');

    show_name_credit_card.innerHTML = 'NOME COMPLETO';
  }
  
});

input_name_credit_card.addEventListener('focus', function(event) { 
  showFrontCrediCard()
});

function actionNameCreditCard(event) {

  show_name_credit_card.innerHTML = (input_name_credit_card.value).toUpperCase();

}

// ------- END NAME -------

// ------- CVV -------

var input_cvv_credit_card = document.getElementById('input_cvv_credit_card');
var show_cvv_credit_card = document.getElementById('show_cvv_credit_card');

input_cvv_credit_card.addEventListener('focus', function(event) {

  front_credit_card.classList.add('hide');
  back_credit_card.classList.remove('hide');

});

input_cvv_credit_card.addEventListener('blur', function(event) {
  
  if ((input_cvv_credit_card.value).length == 3) {
    back_credit_card.classList.remove('back-credit-card');
    back_credit_card.classList.add('back-credit-card-active');
  }else {
    input_cvv_credit_card.classList.add('invalid');
    back_credit_card.classList.add('back-credit-card');
    back_credit_card.classList.remove('back-credit-card-active');
  }


});

function actionCVV(event) {

  show_cvv_credit_card.innerHTML = input_cvv_credit_card.value;

}

//msg_cvv_credit_card
// ------- END CVV -------


// ------- EXPIRED DATE ------- //

var input_exp_date_credit_card = document.getElementById('input_exp_date_credit_card');
var show_exp_date_credit_card = document.getElementById('show_exp_date_credit_card');

function validateExpiredDate(element) {

  var date = element.value; 

  if ( date.match(/^\d{2}$/) !== null) { 

    element.value = date + '/'; 

  };

  show_exp_date_credit_card.innerHTML = element.value;

}

input_exp_date_credit_card.addEventListener('blur', function(event) {
  
  var array_expired_date = (input_exp_date_credit_card.value).split('/');

  if ((array_expired_date[0] >= 1 && array_expired_date[0] <= 12) && (array_expired_date[1] >= 20)) {

    if(array_expired_date[1] == 20 && array_expired_date[0] <= 2){
      input_exp_date_credit_card.classList.add('invalid');

      show_exp_date_credit_card.innerHTML = '00/00';
    }else {
      show_exp_date_credit_card.innerHTML = input_exp_date_credit_card.value;
    } 
  }
  else {
    if((input_exp_date_credit_card.value).length == 0 ){
      msg_exp_date_credit_card.setAttribute('data-error','Data inválida');
    }else {
      msg_exp_date_credit_card.setAttribute('data-error','Poxa, está data parece estar incorreta!');
    }
    input_exp_date_credit_card.classList.add('invalid');

    show_exp_date_credit_card.innerHTML = '00/00';
  }

});
// ------- END EXPIRED DATE ------- //

function selectDividePricePayment(data){
  var select_divide_payment_credit_card = document.getElementById('select_divide_payment_credit_card');
  
  data.divide.forEach(element => {
    let option = document.createElement("option");
    option.value = element.parcela;
    option.text = element.description;
    console.log(element);
    select_divide_payment_credit_card.appendChild(option);
  });

  var instances = M.FormSelect.init(select_divide_payment_credit_card);
  
}