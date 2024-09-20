import './style.css'
import PropTypes from 'prop-types';

export default function Player({name, position, image, backgroundColor}){
    return(
        <div className='player'>
            <div className='player__header' style={{ backgroundColor }}>
                <img src={image} alt={name}/>
            </div>
            <div className='player__footer'>
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}

Player.propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired
};