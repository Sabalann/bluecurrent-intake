import products from '../../products/Products';
import ProductCard from '../../products/ProductCard';
import ProgressBar from './ProgressBar';

function ProductSelection({ onNext, selectedProduct, setSelectedProduct }) {
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

    return (
    <div className="contents-container">
        <div className="background">
          <ProgressBar currentStep={1} totalSteps={7}/>
          <div className="text-section">
            <span className="Motorhuis-laadpunt-s Text-Style-3">Motorhuis laadpunt samenstellen</span><br/>
            <span className="Wat-voor-laadpunt-wi Text-Style-4">Wat voor laadpunt wil je?</span><br/>
            <span className="De-UMOVE-is-ons-par Text">Tekst</span><br/>
          </div>
          <div className="product-options flex gap-8">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                selected={selectedProduct?.id === product.id}
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>
          <button className='previous Button flex'>
            <svg className="arrow arrow-left" fill='none' stroke='currentColor' viewBox="0 0 32 32"><path strokeWidth={3} d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"/></svg>
            <p className='Text-Style text-right'>Vorige</p>
            </button>
          <button 
            className='next Button flex'
            onClick={onNext}
            disabled={!selectedProduct}
          >
            <span className='Text-Style-2 text-left'>Volgende</span>
            <svg className="arrow arrow-right" fill='none' stroke='currentColor' viewBox="0 0 32 32"><path strokeWidth={3} d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"/></svg>
          </button>
          <div className="price min-h-[60px]">
            {selectedProduct ? (
              <span>Jouw keuze {selectedProduct.price}</span>
            ) : (
              <span className="text-gray-400">Selecteer een product om de prijs te zien</span>
            )}
          </div>
        </div>
      </div>
    );
}

export default ProductSelection;