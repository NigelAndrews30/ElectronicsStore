/* Add any JavaScript you need to this file. */

/*----- PRODUCT CREATION ----------*/

//Clear Existing Products
function clearProducts() {
  var products = document.querySelector('#products');
  var row = products.querySelector('.row');
  row.innerHTML = '';
}

//PRODUCT IMG

function createProductImg(product) {
  // variable to be used to create text nodes
  var text;

  var productImgCont = document.createElement('div');
  productImgCont.setAttribute('class', 'product-img');

  var productImg = document.createElement('img');
  productImg.src = product.imageURL;
  productImg.alt = 'Image Not Found';
  productImg.width = 200;
  productImg.height = 200;
  productImgCont.appendChild(productImg);

  var productYear = product.dateAdded.slice(6, 10);
  var productMonth = parseInt(product.dateAdded.charAt(4), 10);

  if (productYear === '2020' && productMonth >= 5) {
    var productLabel = document.createElement('div');
    productLabel.setAttribute('class', 'product-label');

    var newLabel = document.createElement('span');
    newLabel.setAttribute('class', 'new');
    text = document.createTextNode('NEW');
    newLabel.appendChild(text);
    productLabel.appendChild(newLabel);

    productImgCont.appendChild(productLabel);
  }

  return productImgCont;
}

//PRODUCT BODY

function createProductBody(product) {
  // variable to be used to create text nodes
  var text;

  var productBodyCont = document.createElement('div');
  productBodyCont.setAttribute('class', 'product-body');

  var productCategory = document.createElement('div');
  productCategory.setAttribute('class', 'product-category');
  text = document.createTextNode(product.category);
  productCategory.appendChild(text);
  productBodyCont.appendChild(productCategory);

  var productBrand = document.createElement('div');
  productBrand.setAttribute('class', 'product-brand');
  text = document.createTextNode(product.brand);
  productBrand.appendChild(text);
  productBodyCont.appendChild(productBrand);

  var productName = document.createElement('h3');
  productName.setAttribute('class', 'product-name');
  text = document.createTextNode(product.name);
  productName.appendChild(text);
  productBodyCont.appendChild(productName);

  var productPrice = document.createElement('h4');
  productPrice.setAttribute('class', 'product-price');
  text = document.createTextNode(product.price);
  productPrice.appendChild(text);
  productBodyCont.appendChild(productPrice);

  var productRating = document.createElement('div');
  productRating.setAttribute('class', 'product-rating');
  //loop to create 5 fontawesome stars
  for (let count = 0; count < 5; count++) {
    var star = document.createElement('i');
    star.setAttribute('class', 'far fa-star');
    productRating.appendChild(star);
  }
  productBodyCont.appendChild(productRating);

  var productDesc = document.createElement('p');
  productDesc.setAttribute('class', 'product-description');
  text = document.createTextNode(product.description);
  productDesc.appendChild(text);
  productBodyCont.appendChild(productDesc);

  var productBtns = document.createElement('div');
  productBtns.setAttribute('class', 'product-btns');
  var wishlist = document.createElement('button');
  wishlist.setAttribute('class', 'add-to-wishlist');
  var heart = document.createElement('i');
  heart.setAttribute('class', 'far fa-heart fa-lg');
  wishlist.appendChild(heart);
  var tooltip = document.createElement('span');
  tooltip.setAttribute('class', 'tooltip');
  text = document.createTextNode('add to wishlist');
  tooltip.appendChild(text);
  wishlist.appendChild(tooltip);
  productBtns.appendChild(wishlist);

  var cartBtn = document.createElement('button');
  cartBtn.setAttribute('class', 'add-to-cart-btn');
  var cart = document.createElement('i');
  cart.setAttribute('class', 'fas fa-shopping-cart');
  cartBtn.appendChild(cart);
  text = document.createTextNode('add to cart');
  cartBtn.appendChild(text);
  productBtns.appendChild(cartBtn);

  productBodyCont.appendChild(productBtns);

  return productBodyCont;
}

//CREATE FULL PRODUCT

function createProduct(product) {
  // get products container
  var products = document.querySelector('#products');

  //bootstrap row
  var row = products.querySelector('.row');

  //bootstrap column
  var bootstrapCol = document.createElement('div');
  bootstrapCol.setAttribute('class', 'col-md-4 col-xs-6');
  bootstrapCol.setAttribute('id', 'product');

  //product container
  var productCont = document.createElement('div');
  productCont.setAttribute('class', 'product');

  //product img
  var productImg = createProductImg(product);
  productCont.appendChild(productImg);

  //product body
  var productBody = createProductBody(product);
  productCont.appendChild(productBody);

  bootstrapCol.appendChild(productCont);
  row.appendChild(bootstrapCol);
}

//CREATE ALL PRODUCTS FOR PAGE

function createProducts(products) {
  clearProducts();
  products.forEach(function(product) {
    createProduct(product);
  });
}

//Create products on page load
window.onload = function() {
  createProducts(window.products);

  var categoryHeader = document.querySelector('.category-header');

  //Create event handlers for each category to filter products
  var allCat = document.querySelectorAll('#all-categories');
  var headphoneCat = document.querySelectorAll('#headphones');
  var laptopCat = document.querySelectorAll('#laptops');
  var smartphoneCat = document.querySelectorAll('#smartphones');
  var accessoriesCat = document.querySelectorAll('#accessories');

  var allBrandCheckboxes = document.querySelectorAll('[name="brands"]');

  for (let i = 0; i < allCat.length; i++) {
    allCat[i].addEventListener('click', function() {
      createProducts(window.products);
      categoryHeader.innerHTML = 'All Categories';
      for (let i = 0; i < allBrandCheckboxes.length; i++) {
        allBrandCheckboxes[i].checked = false;
      }
    });

    headphoneCat[i].addEventListener('click', function() {
      let filter = window.products.filter(function(product) {
        return product.category === 'Headphones';
      });

      createProducts(filter);
      categoryHeader.innerHTML = 'Headphones';
      for (let i = 0; i < allBrandCheckboxes.length; i++) {
        allBrandCheckboxes[i].checked = false;
      }
    });

    laptopCat[i].addEventListener('click', function() {
      let filter = window.products.filter(function(product) {
        return product.category === 'Laptops';
      });

      createProducts(filter);
      categoryHeader.innerHTML = 'Laptops';
      for (let i = 0; i < allBrandCheckboxes.length; i++) {
        allBrandCheckboxes[i].checked = false;
      }
    });

    smartphoneCat[i].addEventListener('click', function() {
      let filter = window.products.filter(function(product) {
        return product.category === 'Smartphones';
      });

      createProducts(filter);
      categoryHeader.innerHTML = 'Smartphones';
      for (let i = 0; i < allBrandCheckboxes.length; i++) {
        allBrandCheckboxes[i].checked = false;
      }
    });

    accessoriesCat[i].addEventListener('click', function() {
      let filter = window.products.filter(function(product) {
        return product.category === 'Accessories';
      });

      createProducts(filter);
      categoryHeader.innerHTML = 'Accessories';
      for (let i = 0; i < allBrandCheckboxes.length; i++) {
        allBrandCheckboxes[i].checked = false;
      }
    });
  }

  //Filter by brand
  var samsung = document.querySelector('#samsung');
  var apple = document.querySelector('#apple');
  var bose = document.querySelector('#bose');
  var dell = document.querySelector('#dell');
  var lg = document.querySelector('#lg');
  var hp = document.querySelector('#hp');
  var sony = document.querySelector('#sony');

  //Samsung Checbox Checked
  samsung.addEventListener('click', function() {
    //All products
    var allProducts = document.querySelectorAll('.col-md-4');

    for (let i = 0; i < allProducts.length; i++) {
      if (samsung.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Samsung') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Samsung') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (apple.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Apple') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Apple') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (bose.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Bose') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Bose') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (dell.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Dell') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Dell') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (lg.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'LG') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'LG') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (hp.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'HP') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'HP') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (sony.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Sony') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Sony') {
        allProducts[i].setAttribute('id', 'hide');
      }
    }
  });

  //Apple Checbox Checked
  apple.addEventListener('click', function() {
    var allProducts = document.querySelectorAll('.col-md-4');

    for (let i = 0; i < allProducts.length; i++) {
      if (samsung.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Samsung') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Samsung') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (apple.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Apple') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Apple') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (bose.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Bose') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Bose') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (dell.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Dell') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Dell') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (lg.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'LG') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'LG') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (hp.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'HP') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'HP') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (sony.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Sony') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Sony') {
        allProducts[i].setAttribute('id', 'hide');
      }
    }
  });

  //Bose Checbox Checked
  bose.addEventListener('click', function() {
    var allProducts = document.querySelectorAll('.col-md-4');

    for (let i = 0; i < allProducts.length; i++) {
      if (samsung.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Samsung') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Samsung') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (apple.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Apple') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Apple') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (bose.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Bose') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Bose') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (dell.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Dell') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Dell') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (lg.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'LG') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'LG') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (hp.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'HP') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'HP') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (sony.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Sony') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Sony') {
        allProducts[i].setAttribute('id', 'hide');
      }
    }
  });

  //Dell Checbox Checked
  dell.addEventListener('click', function() {
    var allProducts = document.querySelectorAll('.col-md-4');

    for (let i = 0; i < allProducts.length; i++) {
      if (samsung.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Samsung') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Samsung') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (apple.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Apple') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Apple') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (bose.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Bose') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Bose') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (dell.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Dell') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Dell') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (lg.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'LG') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'LG') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (hp.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'HP') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'HP') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (sony.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Sony') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Sony') {
        allProducts[i].setAttribute('id', 'hide');
      }
    }
  });

  //LG Checbox Checked
  lg.addEventListener('click', function() {
    var allProducts = document.querySelectorAll('.col-md-4');

    for (let i = 0; i < allProducts.length; i++) {
      if (samsung.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Samsung') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Samsung') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (apple.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Apple') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Apple') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (bose.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Bose') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Bose') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (dell.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Dell') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Dell') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (lg.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'LG') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'LG') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (hp.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'HP') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'HP') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (sony.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Sony') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Sony') {
        allProducts[i].setAttribute('id', 'hide');
      }
    }
  });

  //HP Checbox Checked
  hp.addEventListener('click', function() {
    var allProducts = document.querySelectorAll('.col-md-4');

    for (let i = 0; i < allProducts.length; i++) {
      if (samsung.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Samsung') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Samsung') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (apple.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Apple') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Apple') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (bose.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Bose') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Bose') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (dell.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Dell') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Dell') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (lg.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'LG') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'LG') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (hp.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'HP') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'HP') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (sony.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Sony') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Sony') {
        allProducts[i].setAttribute('id', 'hide');
      }
    }
  });

  //Sony Checbox Checked
  sony.addEventListener('click', function() {
    var allProducts = document.querySelectorAll('.col-md-4.col-xs-6');

    for (let i = 0; i < allProducts.length; i++) {
      if (samsung.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Samsung') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Samsung') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (apple.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Apple') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Apple') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (bose.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Bose') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Bose') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (dell.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Dell') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Dell') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (lg.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'LG') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'LG') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (hp.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'HP') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'HP') {
        allProducts[i].setAttribute('id', 'hide');
      }

      if (sony.checked === true) {
        if (allProducts[i].querySelector('.product-brand').innerHTML === 'Sony') {
          allProducts[i].setAttribute('id', 'show');
        }
      } else if (allProducts[i].querySelector('.product-brand').innerHTML === 'Sony') {
        allProducts[i].setAttribute('id', 'hide');
      }
    }
  });

  //Validate email address
  var form = document.querySelector('#subscribe-form');

  form['email'].oninput = () => {
    var email = form['email'].value;
    var r = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (r.test(email)) {
      form['email'].setCustomValidity('');
    } else {
      form['email'].setCustomValidity('Please enter a valid email.');
    }
  };
};
