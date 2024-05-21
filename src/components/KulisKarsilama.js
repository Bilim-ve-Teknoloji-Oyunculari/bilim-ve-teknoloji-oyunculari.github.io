import {useSelector} from "react-redux";

function KulisKarsilama() {
    const kulisKarsilama = useSelector((state) => state.content.kulis.karsilama);
    return (
        <div className="wrapper profile-page">
            <div className="page-header clear-filter page-header-small" filter-color="orange">
                <div className="page-header-image" data-parallax="true" style={{
                    backgroundImage: "url(" + kulisKarsilama.arkaplan + ")",
                    transform: "translate3d(0px, 0px, 0px);"
                }}>
                </div>
                <div className="container">
                    <div className="photo-container">
                        <img src={kulisKarsilama.logo} alt="" loading="lazy"/>
                    </div>
                    <h3 className="title">{kulisKarsilama.baslik}</h3>
                    <p className="category">{kulisKarsilama.altBaslik}</p>
                    <div className="content">
                        <div className="social-description">
                            <h2>{kulisKarsilama.oyun}</h2>
                            <p className="pivot-brand">Oyun</p>
                        </div>
                        <div className="social-description">
                            <h2>{kulisKarsilama.gosterim}</h2>
                            <p className="pivot-brand">Gösterim</p>
                        </div>
                        <div class="social-description">
                            <h2>{kulisKarsilama.oyuncu}</h2>
                            <p className="pivot-brand">Oyuncu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KulisKarsilama