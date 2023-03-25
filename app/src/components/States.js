import React from 'react'
import Title from './Title'
import State from './State'
import { states } from '../data'


const States = () => {
    return (
        <section className='section' id='states'>
            <Title title='featured' subtitle='states' />
            <div className='section-center featured-center'>
                {states.map((state) => {
                    return (
                        <State {...state} key={state.id} />
                    )
                })}
            </div>
        </section>
    )
}

export default States