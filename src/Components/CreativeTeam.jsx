import React from 'react';
import '../Scss/Components/CreativeTeam.scss';
import LinkBtn from './LinkBtn';


export default function CreativeTeam() {
    return (
        <>
            <section className='B-Section'>
                <section id='team' className='B-Container'>
                    <h2 className='titleSectionB'>Creative Team</h2>
                    <div className='B-Content L'>
                        <div className="imgRuban"></div>
                    </div>
                    <div className='B-Content R'>
                        <div className='B-Item'>
                            <h2>Good Mindset</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci in nulla assumenda est fuga, labore tempore ratione vitae debitis. Necessitatibus laboriosam enim illo. Ad nam velit modi, iure voluptate rem?Quod nostrum delectus qui enim aspernatur neque sunt laborum porro nam quidem doloremque deserunt.</p>
                        <LinkBtn className='lightClr'  text='Meet the team' />
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

