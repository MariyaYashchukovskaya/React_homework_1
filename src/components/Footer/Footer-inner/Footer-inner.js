import './Footer-inner.css'
import logo from './logo.png'

function FooterInnerAbout() {    
    return( 
        <div>
            <h3 className="footer__title">О нас</h3>
            <p>Каждый день мы открываем двери нашего салона красоты для того, чтобы подарить нашим клиентам удовольствие быть красивыми!Современное оборудование и средства высокого качества помогут нам достичь идеального результата! Вы останетесь довольны качеством предоставляемых услуг! Комфортная обстановка, покой и уют, приветливый персонал, высокое качество обслуживания, являются визитной карточкой нашего салона.</p>
        </div>
    )
}

function FooterInnerContacts() {    
    return( 
        <div>
            <img src={logo} alt="logo"/>
            <div className="footer__social">
                <p>tel: +375(29)123-34-43</p>
                <a href="https://www.instagram.com/">Instagram</a>
            </div>
        </div>
    )
}

export { FooterInnerAbout, FooterInnerContacts }