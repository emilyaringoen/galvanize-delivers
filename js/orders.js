document.addEventListener('DOMContentLoaded', function() {
//establish variables for later use
    var burger = document.getElementById('burger');
    var pizza = document.getElementById('pizza');
    var ribs = document.getElementById('ribs');
    var iceCream = document.getElementById('iceCream');
    var tBody = document.getElementsByTagName('tbody')[0];
    var btn = document.getElementsByClassName('btn-floating');

//object for keeping track of item count
    var count = {
        burger: 0,
        pizza: 0,
        ribs: 0,
        iceCream: 0
    }

//create an order function that updates the order table
function order(food, cost, key) {
        if (key === 1) {
            var tr = document.createElement('tr');
            var item = document.createElement('td');
            var price = document.createElement('td');
            item.classList.add(food+'Item')
            price.classList.add(food+'Price')
            price.classList.add('right-align')
            tBody.appendChild(tr);
            tr.appendChild(item);
            tr.appendChild(price);
            item.innerText = food + ' x ' + key;
            price.innerText = '$' + (cost * key).toFixed(2);
            total(key, cost)

        } else {
          var item = document.getElementsByClassName(food+'Item')[0]
          var price = document.getElementsByClassName(food+'Price')[0]
          item.innerText = food + ' x ' + key;
          price.innerText = '$' + (cost*key).toFixed(2);
          total(key, cost)
        }
    }

//add event listeners to each menu button
    burger.addEventListener('click', function() {
        count.burger += 1;
        order('Burger', 12.99, count.burger);
    });

    pizza.addEventListener('click', function() {
        count.pizza += 1;
        order('Pizza', 14.99, count.pizza);
    });

    ribs.addEventListener('click', function() {
        count.ribs += 1;
        order('Ribs', 16.99, count.ribs);
    });

    iceCream.addEventListener('click', function() {
        count.iceCream += 1;
        order('Ice-Cream', 6.99, count.iceCream);
    });


//function to calculate total and tax
function total(key, cost){
    var taxValue = document.getElementsByClassName('taxAmount')[0]
    var costValue = document.getElementsByClassName('totalAmount')[0]
    let tax = (0.08 * cost * key)
    let toteAmount = (cost * key + tax)
    taxValue.innerText = '$' + tax.toFixed(2)
    costValue.innerText = '$' + (toteAmount).toFixed(2)
}

//reset order form
function redoOrder () {
  window.location.reload()
}

var buttonDelete = document.getElementById('delete')

buttonDelete.addEventListener('click', redoOrder)


//create toast for order submission
function toastMessage (event) {
  event.preventDefault();
  var name = document.getElementById('name').value
  var address = document.getElementById('street').value
  var phone = document.getElementById('phone').value
  var taxValue = document.getElementsByClassName('totalAmount')[0]
  console.log(name.length)
  if (name.length < 1 || address.length < 1 || phone.length < 1) {
    Materialize.toast('Please correct form.', 2000)
  } else if (taxValue.innerText === "") {
    Materialize.toast('Add items to your order.', 2000)
  } else {
    Materialize.toast("Your order is on it's way.", 2000)
    setTimeout(redoOrder, 2000)
  }
}

var submit = document.getElementById('submit')
console.log(submit);
submit.addEventListener('click', toastMessage)


})
