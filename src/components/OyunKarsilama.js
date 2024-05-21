function OyunKarsilama(props) {
    return (
        <div className="wrapper profile-page">
            <div className="page-header clear-filter page-header-small" filter-color="orange">
                <div className="page-header-image" data-parallax="true" style={{
                    backgroundImage: "url(" + props.arkaplan + ")",
                    transform: "translate3d(0px, 0px, 0px);"
                }}>
                </div>
                <div className="container">
                    <div className="photo-container">
                        <img src={props.logo} alt="" loading="lazy"/>
                    </div>
                    <h3 className="title">{props.detay.oyunAdi}</h3>
                    <p className="category">{props.detay.oyunYazari}</p>
                    <div className="content">
                        <div className="social-description">
                            <h2>{props.detay.sahnelemeSayisi}</h2>
                            <p className="pivot-brand">Gösterim</p>
                        </div>
                        <div className="social-description">
                            <h2>{props.detay.oyuncuSayisi}</h2>
                            <p className="pivot-brand">Oyuncu</p>
                        </div>
                        <div class="social-description">
                            <h2>{props.detay.seyirciSayisi}</h2>
                            <p className="pivot-brand">Seyirci</p>
                        </div>
                        <div className="social-description" style={{maxWidth: "400px", width: "400px"}}>
                            <h2>{props.detay.sahnelemeKonumu}</h2>
                            <p className="pivot-brand">Konum</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OyunKarsilama;