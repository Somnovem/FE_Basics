class GoodsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: 'Смартфон iPhone 15',
          price: '45999',
          image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=200&fit=crop'
        },
        {
          id: 2,
          name: 'Ноутбук MacBook Air',
          price: '52999',
          image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop'
        },
        {
          id: 3,
          name: 'Навушники AirPods Pro',
          price: '8999',
          image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&h=200&fit=crop'
        },
        {
          id: 4,
          name: 'Планшет iPad Air',
          price: '28999',
          image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=200&fit=crop'
        },
        {
          id: 5,
          name: 'Годинник Apple Watch',
          price: '12999',
          image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=300&h=200&fit=crop'
        },
        {
          id: 6,
          name: 'Камера Canon EOS',
          price: '35999',
          image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=200&fit=crop'
        }
      ]
    };
  }

  render() {
    return React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gap: '20px',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '20px'
      }
    },
      this.state.products.map(product =>
        React.createElement(GoodsCard, { 
          key: product.id, 
          product: product 
        })
      )
    );
  }
}
