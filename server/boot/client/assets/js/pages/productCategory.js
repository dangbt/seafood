
function _generateItem (data, index) {
  let stringHtml = ''
  if (data.category && data.category.length) {
    data.category.forEach(item => {
      stringHtml += `<li><a href="/product-category?categoryId=${item.id}">${item.name} </a></li>`
    })
  } 
  return `
    <li> 
    <a data-toggle="collapse" data-parent="#category-list" href="#shop-catigory-${index + 1}">${data.name}<i class="la la-angle-down"></i></a>
    <ul id="shop-catigory-${index + 1}" class="panel-collapse collapse ${index === 0 ? 'show' : null}">
    ${stringHtml}
    </ul>
  </li>
  `
}

function getCategory() {
  const filter = {
    where: {
      categoryId: { inq: [null, false] },
    },
    include: ['category']
  }
  return $.ajax({
    url: `/api/categories?filter=${JSON.stringify(filter)}`,
    dataType: 'json'
  });
}
function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
  }
};

function getProducts() {
  const categoryId = getUrlParameter('categoryId')
  const filter = {}
  if (categoryId) {
    filter.where = {
      categoryId
    }
  }
  return $.ajax({
    url: `/api/products?filter=${JSON.stringify(filter)}`,
    dataType: 'json'
  });
}

getCategory().done(function(success) {
  let stringHtml = `
  <li> 
    <a data-parent="#category-list" href="/product-category">Tất cả<i class="la la-angle-down"></i></a>
  </li>
  `
  if (success && success.length) {
    success.forEach((item, index) => {
      stringHtml += _generateItem(item, index)
    })

  }
  $('#category-list').html(stringHtml)
})
getProducts().done(function(products) {
  let stringHtml = ''
  let stringHtml2 = ''
  if(products && products.length > 0) {
    products.forEach(product => {
      stringHtml += `
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
        <div class="product-wrap mb-35">
            <div class="product-img mb-15">
                <a href="/product-detail"><img src=${product.imageUrl || 'assets/images/product/pro-hm1-1.jpg'} alt="product"></a>
                <span class="price-dec">-30%</span>
                <span class="price-dec font-dec">NEW</span>
                <div class="product-action">
                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class="la la-plus"></i></a>
                    <a title="Wishlist" href="#"><i class="la la-heart-o"></i></a>
                    <a title="Compare" href="#"><i class="la la-retweet"></i></a>
                </div>
            </div>
            <div class="product-content">
                <h4><a href="/product-detail">${product.name}</a></h4>
                <div class="price-addtocart">
                    <div class="product-price">
                        <span>${_formatCurrency(product.price)}</span>
                        <span class="old">270.00</span>
                    </div>
                    <div class="product-addtocart">
                        <a title="Add To Cart" href="#">+ Add To Cart</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
      `

    stringHtml2 += `
    <div class="shop-list-wrap mb-30">
      <div class="row">
          <div class="col-xl-4 col-lg-5 col-md-6 col-sm-6">
              <div class="product-list-img">
                  <a href="/product-detail">
                    <img src=${product.imageUrl || 'assets/images/product/pro-hm1-1.jpg'} alt="Product Style">
                    </a>
                  <div class="product-list-quickview">
                      <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i class="la la-plus"></i></a>
                  </div>
              </div>
          </div>
          <div class="col-xl-8 col-lg-7 col-md-6 col-sm-6">
              <div class="shop-list-content">
                  <h4><a href="/product-detail">${product.name}</a></h4>
                  <div class="pro-list-price">
                      <span>${product.price}</span>
                      <span class="old-price">$50.00</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipic it, sed do eiusmod tempor labor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                  <div class="product-list-action">
                      <a title="Wishlist" href="#"><i class="la la-heart-o"></i></a>
                      <a title="Compare" href="#"><i class="la la-retweet"></i></a>
                      <a title="Add To Cart" href="#"><i class="la la-shopping-cart"></i></a>
                  </div>
              </div>
          </div>
      </div>
    </div>
    `
    })
  }
  $('#product-list').html(stringHtml)
  $('#product-list-2').html(stringHtml2)
})