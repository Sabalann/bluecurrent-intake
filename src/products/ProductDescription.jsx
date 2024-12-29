function ProductDescription({product}) {
    return (
        <div className="flex flex-col gap-2">
            {product.description.map((desc, index) => (
                <div key={index} className="flex items-center gap-2">
                    <svg className="smile w-7 h-7" viewBox="0 0 24 24" fill="none" strokeWidth={10}>
                        <path className="smile" d="M8 12l3 3 6-6"/>
                    </svg>
                    <h3 className="Text">{desc}</h3>
                </div>
            ))}
        </div>
    );
}

export default ProductDescription;