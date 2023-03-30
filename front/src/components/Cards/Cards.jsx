import Card from '../Card/Card.jsx';
import style  from "./Cards.module.css"

export default function Cards(props) {

      const { characters, onClose } = props;

       return (
            <div className={style.Personaje}>

                  {characters.map((personaje) => {
                        return <Card
                        key = {personaje.id}
                        id={personaje.id}
                        name ={personaje.name} 
                        species = {personaje.species} 
                        gender = {personaje.gender}
                        image= {personaje.image}
                        onClose={onClose}
                        />
                  })
                  }
            </div>
      )
}
