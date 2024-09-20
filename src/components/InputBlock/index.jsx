/* eslint-disable react/prop-types */
import './style.css'
export default function InputBlock({alteredValue, label, value, obligatory, placeholder}) {

    // const [inputValue, setValue] = useState('Maciel Santos')
    const eventListener = (event) => {
        alteredValue(event.target.value);
    }
    return (
        <div className="input-block">
            <label>
                {label}
            </label>
            <input onChange={eventListener} value={value} required={obligatory} placeholder={placeholder}/>
        </div>
    )
}
