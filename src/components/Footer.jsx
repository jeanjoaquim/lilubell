import Whatsapp from '../images/svg/whatsapp.svg';
import Pinterest from '../images/svg/pinterest.svg';
import Instagram from '../images/svg/instagram.svg';

function Footer() {
    return(
        <footer className="footer-section">
            <h3>Inscreva-se na newsletter</h3>
            <form className="newsletter-form">
                <input type='text' placeholder='E-mail' />
                <button>inscrever-se</button>
            </form>
            <div className="footer-content">
                <div className="privacy-policies">
                    <h3>legal</h3>
                    <p>termos de serviço</p>
                    <p>política de privacidade</p>
                </div>
                <div className="socials">
                    <h3>Redes sociais</h3>
                    <div className="social-icons">
                        <img src={Whatsapp} className='social whatsapp' />
                        <img src={Pinterest} className='social pinterest' />
                        <img src={Instagram} className='social instagram' />
                    </div>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;