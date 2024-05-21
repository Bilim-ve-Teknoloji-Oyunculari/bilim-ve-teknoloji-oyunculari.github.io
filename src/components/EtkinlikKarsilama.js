import {imgKampusTemizligi1, logo01kare} from "../assets/img/Gorseller";
import React from "react";

function EtkinlikKarsilama(props) {
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
                        <img src={props.logo} alt=""/>
                    </div>
                    <h3 className="title">{props.detay.etkinlikAdi}</h3>
                    <p className="category">{props.detay.etkinlikAltBasligi}</p>
                    <div className="content">
                        {
                            props.detay.katilimciSayisi > 0 ?
                                <div className="social-description">
                                    <h2>{props.detay.katilimciSayisi}</h2>
                                    <p className="pivot-brand">Katılımcı</p>
                                </div> :
                                <div className="social-description">
                                    <h2>{props.detay.kusak}</h2>
                                    <p className="pivot-brand">Kuşak</p>
                                </div>
                        }
                        <div className="social-description" style={{maxWidth: "300px", width: "200px"}}>
                            <h2>{props.detay.etkinlikKonumu}</h2>
                            <p className="pivot-brand">Konum</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default EtkinlikKarsilama;
