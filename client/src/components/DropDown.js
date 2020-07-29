import React from 'react'

function DropDown({ initialValue, options }) {
    return (
        <select>
            <option value="">{initialValue}</option>
            {
                options &&
                options.length &&
                options.map(({ id, name }, i) => (
                    <option key={i} value={id}>{name}</option>
                ))
            }
        </select>
    )
}

export default DropDown;