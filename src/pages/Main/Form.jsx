function Form() {
    return (
        <>
            <form className="payment-form p-8">
                <div>
                    <span className="Keuzekop">Naam</span>
                    <div className="input-container my-2">
                    <input
                        id="fname"
                        className="floating-input my-2 w-full"
                        type="text"
                        placeholder=" "
                    />
                    <label htmlFor="fname" className="floating-label">
                        Voornaam
                    </label>
                    </div>
                    <div className="input-container my-2">
                    <input
                        id="lname"
                        className="floating-input my-2 w-full"
                        type="text"
                        placeholder=" "
                    />
                    <label htmlFor="lname" className="floating-label">
                        Achternaam
                    </label>
                    </div>
                </div>
                <div>
                    <span className="Keuzekop">Contact</span>
                    <div className="input-container my-2">
                    <input
                        id="contact-phone"
                        className="floating-input my-2 w-full"
                        type="text"
                        placeholder=" "
                    />
                    <label htmlFor="contact-phone" className="floating-label">
                        Telefoonnummer
                    </label>
                    </div>
                    <div className="input-container my-2">
                    <input
                        id="contact-email"
                        className="floating-input my-2 w-full"
                        type="text"
                        placeholder=" "
                    />
                    <label htmlFor="contact-email" className="floating-label">
                        E-mail
                    </label>
                    </div>
                </div>
                <div>
                <span className="Keuzekop">Adres</span>
                    <div className="input-container my-2">
                    <input
                        id="address-street"
                        className="floating-input my-2 w-full"
                        type="text"
                        placeholder=" "
                    />
                    <label htmlFor="address-street" className="floating-label">
                        Straatnaam + huisnr.
                    </label>
                    </div>
                    <div id="adress-section" className="flex gap-4">
                        <div id="zipcode-input" className="input-container w-2/5">
                            <input
                            id="address-zipcode"
                            className="floating-input my-2 w-full"
                            type="text"
                            placeholder=" "
                            />
                            <label htmlFor="address-zipcode" className="floating-label">
                            Postcode
                            </label>
                        </div>
                        <div className="input-container grow">
                            <input
                            id="address-city"
                            className="floating-input my-2 w-full"
                            type="text"
                            placeholder=" "
                            />
                            <label htmlFor="address-city" className="floating-label">
                            Plaats
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row items-center flex-wrap gap-y-3 justify-between">
                        <button className='Button next-button flex'>
                            <p className='Text-Style-2 text-left'>Direct Betalen</p>
                            <svg className="arrow arrow-right" fill='none' stroke='currentColor' viewBox="0 0 32 32"><path strokeWidth={3} d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"/></svg>
                        </button>
                        <a className="Link">Stuur een offerte</a>
                    </div>
                    <span className="Text text-xs">Betalen via iDEAL, Creditcard… etc.</span>
                </div>
            </form>
        </>
    );
}

export default Form