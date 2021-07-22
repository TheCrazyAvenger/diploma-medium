const calc = () => {
  const mozaikaPrices = {
    1: '1999',
    6: '9900',
    9: '13990',
    12: '19900',
  };

  const schelkovoPrices = {
    1: '2999',
    6: '14990',
    9: '21990',
    12: '24990',
  };

  const priceValues = document.querySelectorAll('input[name="card-type"]'),
    clubs = document.querySelectorAll('[data-club]'),
    form = document.getElementById('card_order'),
    priceMessage = document.getElementById('price-total'),
    promo = document.getElementById('promo');

  const showPrice = (obj, month, discount) => {
    Object.keys(obj).map((price) => {
      if (month === price)
        priceMessage.textContent = Math.floor(+obj[price] * discount);
    });
  };

  const checkClub = (month, discount = 1) => {
    clubs.forEach((club, i) => {
      if (club.checked) {
        i === 0 && showPrice(mozaikaPrices, month, discount);
        i === 1 && showPrice(schelkovoPrices, month, discount);
      }
    });
  };

  const checkPriceValues = (discount) => {
    priceValues.forEach((item) => {
      item.checked && checkClub(item.value, discount);
    });
  };

  if (clubs.length > 0) {
    form.addEventListener('input', (e) => {
      const target = e.target;
      if (target.matches('[data-price]')) {
        checkClub(target.value);
      }
      if (target.matches('[data-club]')) {
        checkPriceValues();
      }
      if (promo.value === 'ТЕЛО2019') {
        checkPriceValues(0.7);
      }
    });
  }
};

export default calc;
