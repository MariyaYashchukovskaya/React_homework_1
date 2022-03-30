import './Card.css'
import makeup from './makeup.jpg'
import hairstyle from './hairstyle.jpg'
import manicure from './manicure.jpg'

function CardOne() {
    return (
      <div className="card">
        <div className="card__inner">
            <h3  className="card__title">Макияж</h3>
            <img className="card__photo" src={makeup} alt="makeup"/>
            <p className="card__text" >Макияж — искусство оформления лица с помощью декоративной косметики, красок, теней, кремов, а также само такое оформление. Целью макияжа является украшение, самовыражение, а также камуфлирование существующих особенностей.</p>
       </div>
       <button className="card__btn" >Наши работы</button>
      </div>
    );
  }

  function CardTwo() {
    return (
      <div className="card">
        <div className="card__inner">
          <h3  className="card__title">Прическа</h3>
          <img className="card__photo" src={hairstyle} alt="makeup"/>
          <p className="card__text" >Причёска — это форма, придаваемая волосам стрижкой, завивкой, укладкой и филировкой, подбором цветовой гаммы. Она может быть из естественных и искусственных волос с шиньонами и прядями разных цветов.</p>
        </div>
        <button className="card__btn" >Наши работы</button>
      </div>
    );
  }

  function CardThree() {
    return (
      <div className="card">
        <div className="card__inner">
          <h3  className="card__title">Маникюр</h3>
          <img className="card__photo" src={manicure} alt="makeup"/>
          <p className="card__text" >Маникюр — косметическая процедура по обработке ногтей на пальцах рук. Маникюр выполняется как в салонах красоты или косметологических кабинетах квалифицированными специалистами, так и в домашних условиях.</p>
        </div>
        <button className="card__btn" >Наши работы</button>
      </div>
    );
  }

  export { CardOne, CardTwo, CardThree }