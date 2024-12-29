
function ProductCard({ product, selected, onClick }) {
  return (
    <div 
      className={`
        product-card-background 
        relative 
        rounded-lg 
        overflow-hidden
        cursor-pointer
        ${selected ? 'product-selected' : 'product-unselected'}
      `}
      style={{ 
        backgroundColor: '#ffffff',
        backgroundImage: `url(${product.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      onClick={onClick}
    >
    <div className="product-card-title-background absolute bottom-0 left-0 right-0 px-4 pb-4 content-center">
      <div className="flex items-center gap-2">
        {selected ? (
          <>
            <div className="Oval flex items-center justify-center">
              <svg className="smile" viewBox="0 0 24 24" fill="none">
                <path className="smile" d="M8 12l3 3 6-6"/>
              </svg>
            </div>
            <h3 className="product-card-title text-xl font-bold">{product.name}</h3>
          </>
        ) : (
          <>
            <div className="Oval flex items-center justify-center opacity-30 saturate-0">
              <svg className="smile" viewBox="0 0 24 24" fill="none">
                <path className="smile" d="M15 9l-6 6M9 9l6 6"/>
              </svg>
            </div>
            <h3 className="product-card-title text-xl font-bold opacity-30">{product.name}</h3>
          </>
        )}
      </div>
    </div>
    </div>
  );
}

export default ProductCard;