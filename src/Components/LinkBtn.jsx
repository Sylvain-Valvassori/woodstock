import React from 'react';
import '../Scss/Components/LinkBtn.scss';


export default function LinkBtn(props) {
    return (
        <>
            <p className={'LinkBtn ' + props.className}>{props.text}</p>
        </>
    )
}
