import { Card } from '../card/card.component';
import { Monster } from '../../App';
import './card-list.styles.css';

type CardListProp = {
    monsters: Monster[];
}
export const CardList = ({ monsters }: CardListProp) => (
    <div className='card-list'>
        {monsters.map(monster => {
            return (
                <Card monster={ monster }/>
            )
        })}
    </div>
);