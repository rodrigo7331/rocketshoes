import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    this.setState({ products: data });
  }

  handleAddProduct(id) {
    const { addToCartRequest } = this.props;
    addToCartRequest(id);
  }

  render() {
    const { products } = this.state;
    const { amount } = this.props;
    return (
      <ProductList>
           <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg?ts=1571078789&" alt="tenis" />
            <strong>Tênis Nike Revolution 5</strong>
            <span>R$ 289,86</span>
            <button
            type="button">
              
                    <div>
                <MdAddShoppingCart size={16} color="#fff" />
                {0}
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          
          </li>
      </ProductList>
    );
  }
}
const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount || 0;
    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);









        
