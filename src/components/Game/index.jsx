import PropTypes from 'prop-types';
import Player from '../player'
import './style.css'

export default function Game({name, firstColor, secondColor, players}){
    const css = { backgroundColor: firstColor}
    return(
        (players.length > 0) && 
        <section className='game' style={css}>
            
            <h3 style={{ borderColor: secondColor }}>{name}</h3>
            
            <div className='game__container-of-players'>
                {players.map(player => (
                    <Player
                        backgroundColor={secondColor} 
                        key={player.name}
                        name={player.name} 
                        position={player.position}
                        image={player.image} />))}
            </div>
        </section>
    )
}

Game.propTypes = {
    name: PropTypes.string.isRequired,
    firstColor: PropTypes.string.isRequired,
    secondColor: PropTypes.string.isRequired,
    players: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            position: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired
        })
    ).isRequired
    
};