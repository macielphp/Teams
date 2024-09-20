/* eslint-disable react/prop-types */
import './style.css'

const Button = ({children}) => {
    return(
        <button className="button">{children}</button>
    )
}
export default Button