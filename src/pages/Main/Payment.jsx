import ProductDescription from '../../products/ProductDescription';
import ProgressBar from './ProgressBar';
import Form from './Form';

function Payment({ onPrevious, selectedProduct }) {
    return (
    <div className="contents-container">
        <div className="background payments-background">
        <ProgressBar currentStep={2} totalSteps={7}/>
          <div className="text-section">
            <span className="Motorhuis-laadpunt-s Text-Style-3">Motorhuis laadpunt samenstellen</span><br/>
            <span className="Wat-voor-laadpunt-wi Text-Style-4">Gefeliciteerd!</span><br/>
            <span className="De-UMOVE-is-ons-par Text">Je hebt een pracht oplaadpunt samengesteld! Vul jouw gegevens in en wij nemen graag jouw setting door. Tot snel!</span><br/>
          </div>
          <div className="payment-chosen-product grid grid-cols-2">
            <div className="payment-chosen-product-image overflow-hidden"
              style={{
                backgroundImage: `url(${selectedProduct.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}/>
            <div className="product-info justify-items-start flex flex-col h-full">
              <div className="flex-grow flex items-center">
                <ProductDescription className="my-auto" product={selectedProduct}/>
              </div>
              <div className='mt-auto'>
                <span className="product-price text-1xl block">Jouw keuze</span>
                <span className='product-price text-2xl font-bold'>{selectedProduct.price}</span>
              </div>
            </div>
          </div>
          <Form/>
          <button className='previous Button flex' onClick={onPrevious}>
            <svg className="arrow arrow-left" fill='none' stroke='currentColor' viewBox="0 0 32 32"><path strokeWidth={3} d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"/></svg>
            <p className='Text-Style text-right'>Vorige</p>
          </button>
        </div>
    </div>
    );
}

export default Payment;