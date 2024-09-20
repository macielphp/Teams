import './style.css'

export default function Footer(){
    return(
        <footer className='footer'>
            <div className='footer__socials'>
                <a className='socials__link' href="#"></a>
                <a className='socials__link' href="#"></a>
                <a className='socials__link' href="#"></a>
            </div>
            <h3 className='footer__h3'>Teams</h3>
            <p>Developed by <a href="https://github.com/macielphp">macielphp</a> - 2024</p>
        </footer>
    )
}