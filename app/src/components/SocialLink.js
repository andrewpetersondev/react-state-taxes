import React from 'react'

const SocialLink = ({ itemClass, href, icon, id }) => {
    return (
        <li>
            <a href={href} key={id} target='_blank' rel='noreferrer' className={itemClass}>
                <i className={icon}></i>
            </a>
        </li>
    )
}

export default SocialLink