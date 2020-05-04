import React from 'react'

export default ({ input, label, placeholder, meta: {touched, error} }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{marginBottom: '5px'}} placeholder={placeholder}/>
            <div className="red-text" style={ {marginBottom: '8px'} } >
                {touched && error}
            </div>
            
        </div>
    )
}