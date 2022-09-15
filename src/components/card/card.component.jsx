import { Component } from "react";
import './card.styles.css';

export class Card extends Component {
    render() {
        const { name, email, id } = this.props.person;
        return (
            <div class='card-container' key= { id }>
                <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        )
    }
}