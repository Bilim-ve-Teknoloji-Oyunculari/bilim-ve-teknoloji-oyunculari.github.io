function Kart(props) {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="card" style={{width: "20rem"}}>
                <img className="card-img-top" src={props.img} alt="Etkinlik Görseli" loading="lazy"/>
                <div className="card-body">
                    <h3 className="card-title">{props.name}</h3>
                    <h6 className="card-subtitle mb-2 text-muted">{props.location}</h6>
                    <p className="card-text description">{props.description}</p>
                    <a href={props.link} className="btn btn-primary">İncele</a>
                </div>
            </div>
        </div>
    )
}

export default Kart;