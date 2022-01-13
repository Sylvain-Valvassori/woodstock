import React from 'react';
import '../Scss/Components/Form.scss';


export default function Form() {
    return (
        <>  
            <section id='contacts' className='C-section'>
                <h3>CONTACT US</h3>
                <form action="" method="">
                    <input type="text" name='firstName' placeholder="FIRST NAME"/>
                    <input type="text"  name='lastName' placeholder="LAST NAME"/>
                    <input type="email"  placeholder="MAIL ADRESS"/>
                    <textarea name='message' placeholder="MESSAGE"></textarea>
                    <button type="submit" >Send</button>
                </form>
            </section>
        </>
    )
}
