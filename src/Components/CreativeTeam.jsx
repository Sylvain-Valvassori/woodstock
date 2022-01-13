import React from 'react';
import '../Scss/Components/CreativeTeam.scss';
import LinkBtn from './LinkBtn';


export default function CreativeTeam() {
    return (
        <>
            <section className='C-Section'>
                <section className='C-Container'>
                    <h2 className='titleSectionC'>Creative Team</h2>
                    <div className='C-Content L'>
                        <div className="imgRuban"></div>
                    </div>
                    <div className='C-Content R'>
                        <div className='C-Item'>
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

