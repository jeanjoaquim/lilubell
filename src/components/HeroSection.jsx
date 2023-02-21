import bolsa from '../images/bolsa1.png';

function HeroSection() {
    return(
        <section className="Hero">
            <img src={bolsa} alt='' className='hero-image'/>
            <div className="cta-container">
                <h2 className="costuras">costuras</h2>
                <h2 className="criativas">criativas</h2>
                <p>
                    Fabricação de costuras personalizadas com acabamentos 
                    de alta qualidade feitos a mão, onde você escolhe 
                    a padronagem e o acabamento com a sua cara.
                </p>
                <button>comprar</button>
            </div>
        </section>
    )
}

export default HeroSection;