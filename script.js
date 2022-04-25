let allTotal = 0;
function addToCart(element) {
    // Ovde smo selektovali sta nam treba sve da bi stavili korpu
    let mainEl = element.closest('.single-item');
    let name = mainEl.querySelector('h3').innerText;
    let price = mainEl.querySelector('.price').innerText;
    let quantity = mainEl.querySelector('input').value;
    // Ovde selektujemo korpu
    let cart = document.querySelector('.cart-items');

    if (parseInt(quantity) > 0) {

        // Ovde smo pretvorili u brojeve i napravili formulu
        price = price.substring(1);
        price = parseInt(price);
        quantity = parseInt(quantity);
        let total = price * quantity;

        // Ovde smo naveli sta treba se ispise i kako
        cart.innerHTML += `<div class="cart-single-item">
        <h3>${name}</h3>
        <p>$${price} x ${quantity} = $<span>${total}</span></p>
        <button onclick="removeCart(this)">Ukloni</button>
        </div>`;

        // Ovde kreiramo ukupnu cenu svega u korpi
        allTotal += total;
        document.querySelector('.total').innerText = `Total: $${allTotal}`

        // Ovde smo ugasili dugme i promenili naziv
        element.innerText = 'dodato';
        element.setAttribute('disabled', 'true');

    } else {
        alert('odaberi kolicinu!');
    }
}
function removeCart(element) {
    // Ovde na klik dugmeta brisemo stvari iz korpe
    let mainEl = element.closest('.cart-single-item');
    mainEl.remove();

    // Ovde smanjujemo cenu svih stvari koje obrisemo
    let price = mainEl.querySelector('p  span').innerText;
    allTotal -= parseInt(price);
    document.querySelector('.total').innerText = `Total: $${allTotal}`;

    // Vracanje dugmeta da bude kliky
    let name = mainEl.querySelector('h3').innerText;
    let vegetables = document.querySelectorAll('.single-item');
    vegetables.forEach(function (vege) {
        let itemName = vege.querySelector('.si-content h3').innerText;

        if (itemName === name) {
            vege.querySelector('.actions input').value = 0;
            vege.querySelector('.actions button').removeAttribute('disabled');
            vege.querySelector('.actions button').innerText = 'Dodaj';
        }
    });

}