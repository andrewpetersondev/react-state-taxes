const State = ({ id, image, taxRate, location }) => {
    return (
        <article className='tour-card'>
            <div className='tour-img-container'>
                <img src={image} className='tour-img' alt={id} />
                <p className='tour-date'>{id}</p>
            </div>
            <div className='tour-info'>
                <div className='tour-title'>
                    <h4>{id}</h4>
                </div>
                <p>{id}</p>
                <div className='tour-footer'>
                    <p>
                        <span>
                            <i className='fas fa-map'></i>
                        </span>
                        {location}
                    </p>
                    <p>from {taxRate}%</p>
                    <p>{id} days</p>
                </div>
            </div>
        </article>
    )
}
export default State
