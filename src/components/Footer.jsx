import Whatsapp from '../images/svg/whatsapp.svg';
import Pinterest from '../images/svg/pinterest.svg';
import Instagram from '../images/svg/instagram.svg';

function Footer() {
    return(
        <footer className="footer-section">
            <form className="newsletter-form">
                <label>Inscreva-se na newsletter</label>
                <div>
                    <input className='input-text' type='text' placeholder='E-mail' />
                    <button>inscrever-se</button>
                </div>
            </form>
            <div className="footer-content">
                <div className="privacy-policies">
                    <h3>legal</h3>
                    <p>Termos de serviço</p>
                    <p>Política de privacidade</p>
                </div>
                <div className="socials">
                    <h3>redes sociais</h3>
                    <div className="social-icons">
                        <img src={Whatsapp} className='social whatsapp' alt='' />
                        <img src={Pinterest} className='social pinterest' alt='' />
                        <img src={Instagram} className='social instagram' alt='' />
                    </div>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;