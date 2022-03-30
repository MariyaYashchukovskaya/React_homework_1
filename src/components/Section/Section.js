import { CardOne, CardTwo, CardThree } from './Card/Card'
import './Section.css'

function Section() {
    return (
      <section>
         <div className="item"><CardOne/></div>
         <div className="item"><CardTwo/></div>
         <div className="item"><CardThree/></div>
      </section>
    );
  }

  export { Section }