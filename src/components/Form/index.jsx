/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from '../Button';
import InputBlock from '../InputBlock';
import List from '../List';
import './style.css'
import DefaultProfileImage from './assets/default-image.jpg';

const Form = ({newAddedPlayer, gamesNames}) => {
    
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [game, setGame] = useState('')

    
    const whenSaved = (event) => {
        event.preventDefault();

        const isValidUrl =  (url) => {
            try {
                new URL(url);
                return true;
            } catch {
                return false;
            }
        }
        // Is the image url valid validation
        const imageUrl = isValidUrl(image) ? image : DefaultProfileImage;

        newAddedPlayer({
            name: name,
            position: position,
            image: imageUrl,
            game: game
        })
        setName('')
        setPosition("")
        setImage("")
        setGame("")
    }
    return(
        <section className="form-container">
            <form onSubmit={whenSaved}>
                <h2>Fill in the details to create the members card</h2>

                <InputBlock
                alteredValue={value => setName(value)} 
                value={name} 
                obligatory={true} 
                label="Name" 
                placeholder="Type your name"/>

                <InputBlock 
                alteredValue={value => setPosition(value)} 
                value={position} 
                obligatory={true} 
                label="Position" 
                placeholder="Type your position"
                /> 
                <InputBlock 
                alteredValue={value => setImage(value)} 
                value={image} 
                label="Image" 
                placeholder="Type the image's address"
                />
                <List 
                obligatory={true} 
                items={gamesNames}
                value={game}
                label="Game" 
                alteredValue={value => setGame(value)}
                />
                <Button>
                    Create card
                </Button>
            </form>
        </section>
    )
}

export default Form;