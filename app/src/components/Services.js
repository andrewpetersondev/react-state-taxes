import React from 'react'
import Service from './Service'
import Title from './Title'

const Services = () => {
    return (
        <section className='section services' id='services'>
            <Title Title='our' subTitle='services' />
            <div className='section-center services-center'>
                {Services.map((service) => {
                    return <Service {...service} key={service.id} />
                })}
            </div>
        </section>
    )
}

export default Services