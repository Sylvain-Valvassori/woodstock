import React      from 'react';
import LinkBtn    from './LinkBtn';
import pictureOne from '../images/f1.jpg';
import pictureTwo from '../images/f4.jpg';

import '../Scss/Components/About.scss';


export default function About() {
    return (
        <>
            <section className='A-Section'>
                <section className='A-Container'>
                    <div className='A-Content'>
                        <div className='imgLeft'>
                            <img src={pictureOne} alt="chair"/>
                        </div>
                    </div>
                    <div className='A-Content'>
                        <div className='A-Item'>
                            <h2>ABOUT US</h2>
                            <p>Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?
                            </p>
                        </div>
                        <LinkBtn text='Learn More'/>
                    </div>
                </section>
                <section className='A-Container'>
                    <div className='A-Content'>
                        <div className='A-Item'>
                            <h2>SHOP</h2>
                            <p>Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, I'll kill the motherfucker, know what I'm sayin'?
                            </p>
                        </div>
                        <LinkBtn text='Go Shopping'/>
                    </div>
                    <div className='A-Content'>
                        <div className='imgRight'>
                            <img src={pictureTwo} alt="livingroom"/>
                        </div>
                    </div>
                </section>          
            </section>
        </>
    )
}
