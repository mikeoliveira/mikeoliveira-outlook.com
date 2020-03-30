
let url = 'http://www.mocky.io/v2/5e8190033000002d006f9824';
fetch(url)
.then(function(response) {
  response.json().then(function(data) { selectDividePricePayment(data)})
})

