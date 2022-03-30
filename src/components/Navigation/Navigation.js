import './Navigation.css'
import logo from './logo.png'

function Navigation() {    
    return( 
        <nav>
            <div className="container">
                <div className="nav__menu">
                    <img className="nav__logo" src={logo} alt="logo"/>
                    <ul className="nav__list">
                        <li>О нас</li>
                        <li>Наши работы</li>
                        <li>Новости</li>
                        <li>Контакты</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export { Navigation }