class GoodsCard extends React.Component {
  render() {
    const { product } = this.props;
    return React.createElement('div', { 
      className: 'goods-card',
      style: {
        background: '#ffffff',
        borderRadius: '12px',
        padding: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer',
        border: '1px solid #e5e7eb'
      },
      onMouseEnter: (e) => {
        e.target.style.transform = 'translateY(-4px)';
        e.target.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
      },
      onMouseLeave: (e) => {
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
      }
    },
      React.createElement('div', {
        style: {
          width: '100%',
          height: '120px',
          background: '#f3f4f6',
          borderRadius: '8px',
          marginBottom: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }
      },
        React.createElement('img', {
          src: product.image,
          alt: product.name,
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px'
          }
        })
      ),
      React.createElement('h4', {
        style: {
          margin: '0 0 8px 0',
          fontSize: '16px',
          fontWeight: '600',
          color: '#1f2937',
          lineHeight: '1.4'
        }
      }, product.name),
      React.createElement('p', {
        style: {
          margin: '0',
          fontSize: '18px',
          fontWeight: '700',
          color: '#059669'
        }
      }, `${product.price} ₴`)
    );
  }
}
