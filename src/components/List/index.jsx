/* eslint-disable react/prop-types */

import './style.css'

export default function List({ label, alteredValue, required, value, items }){
    return(
        <div className="list">
            <label>{label}</label>
            <select onChange={event => alteredValue(event.target.value)} required={required} value={value}>
                <option value=""> </option>
                {items.map(item => {
                    return <option key={item}> {item} </option>
                })}
            </select>
        </div>
    )
}
