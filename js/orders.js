document.addEventListener('DOMContentLoaded', function() {
    var burger = document.getElementById('burger');
    var pizza = document.getElementById('pizza');
    var ribs = document.getElementById('ribs');
    var iceCream = document.getElementById('iceCream');
    var tBody = document.getElementsByTagName('tbody')[0];
    var btn = document.getElementsByClassName('btn-floating');

    var count = {
        burger: 0,
        pizza: 0,
        ribs: 0,
        iceCream: 0
    }

    var order = function(food, cost, key) {
        if (key === 1) {
            var tr = document.createElement('tr');
            var item = document.createElement('td');
            var price = document.createElement('td');
            item.classList.add(food+'Item')
            price.classList.add(food+'Price')
            tBody.appendChild(tr);
            tr.appendChild(item);
            tr.appendChild(price);
            item.innerText = food + ' x ' + key;
            price.innerText = '$' + (cost * key);
            total(key, cost)

        } else {
          var item = document.getElementsByClassName(food+'Item')[0]
          var price = document.getElementsByClassName(food+'Price')[0]
          item.innerText = food + ' x ' + key;
          price.innerText = '$' + (cost*key);
          total(key, cost)
        }
    }

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

function total(key, cost){
  var tfoot = document.createElement('tfoot')
  var tr = document.createElement('tr')
  var word = document.createElement('td')
  word.classList.add('total')
  var amount = document.createElement('td')
  amount.classList.add('amount')
  var table = document.getElementsByTagName('table')[0]
  tr.appendChild(word)
  tr.appendChild(amount)
  tfoot.appendChild(tr)
  table.appendChild(tfoot)
  word.innerText = "Total"
  amount.innerText = key * cost
}

})
