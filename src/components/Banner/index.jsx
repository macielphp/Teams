import './style.css'
import Logo from './assets/logo.svg'
export default function Banner(){
    return(
        <header className='banner'>
            <div className='banner__content'>
                <img className='banner__logo' src={Logo} alt='' />
                <h1 className='banner__title'>Teams</h1>
            </div>
        </header>
    )
}
