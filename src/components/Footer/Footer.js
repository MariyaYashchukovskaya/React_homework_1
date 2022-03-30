import './Footer.css'
import { FooterInnerAbout, FooterInnerContacts } from './Footer-inner/Footer-inner'

function Footer() {    
    return( 
        <footer>            
            <div className="footer__inner_about"><FooterInnerAbout/> </div>
            <div className="footer__inner_contacts"><FooterInnerContacts/></div>
        </footer>
    )
}

export { Footer }