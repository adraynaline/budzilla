import axios from 'axios';
import Rating from '../components/Rating';

const HomeScreen = {
  render: async () => {
    const response = await axios({
      url: 'http://localhost:5000/api/products',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response || response.statusText !== 'OK') {
      return '<div>Error in getting data</div>';
    }
    const products = response.data;
    return `
            <ul class="products">
                ${products.map(
                    (product) => `
                        <li>
                        <div class="product">
                              <a href="/#/product/${product._id}">
                                  <img src="${product.image}" alt="${product.name}"/>
                              </a>
                              <a href="/#/product/${product._id}">
                                  <a href="/#/product/1">
                                    ${product.name}
                                  </a>
                              </div>
                              <!-- RECUPERER LE RATING NIQUE TOUT LE CSS -->
                              <div class="product-rating">
                                ${Rating.render({
                                //  value: product.rating,
                                //  text: `${product.numReviews} reviews`,
                                })}
                              </div>
                              <div class="product-brand">
                                    ${product.brand}
                              </div>
                              <div class="product-price">
                                    ${product.price}
                              </div>
                        </div>
                      </li>
                        `).join('\n')}
        `;
  },
};
export default HomeScreen;
