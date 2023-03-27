const State = ({ id, image, taxRate, location }) => {
    return (
        <article className='state-card'>
            <div className='state-img-container'>
                <img src={image} className='state-img' alt={id} />
                <p className='state-date'>{id}</p>
            </div>
            <div className='state-info'>
                <div className='state-footer'>
                    <p>
                        <span>
                            <i className='fas fa-map'></i>
                        </span>
                        {location}
                    </p>
                    <p>{taxRate}</p>
                </div>
            </div>
        </article>
    )
}
export default State
