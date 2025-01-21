import React from 'react'

import style from './SubmitButton.module.css';

function SubmitButton({ width , height , icon , children , color , backgroundColor }) {
    return (
        <div className={style["submit-button"]} style={{width: width , height: height}}>
            <div className={style.icon}>
                {icon}
            </div>
            <input 
                style={{
                    width: width,
                    height: height,
                    backgroundColor: '#0473E3',
                    color: color
                }}
                type="submit" 
                value={children}
            />
        </div>
    );
}

export default SubmitButton;