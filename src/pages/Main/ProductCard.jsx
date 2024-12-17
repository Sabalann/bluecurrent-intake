import React from 'react';

function ProductCard({ selected, backgroundImage, productName, price }) {
  return (
    <div className={`product-background ${selected ? 'selected' : ''}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="product-name">
        {productName}
      </div>
    </div>
  );
}

export default ProductCard;