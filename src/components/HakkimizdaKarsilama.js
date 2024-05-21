import {imgKarsilama1, logo01kare} from "../assets/img/Gorseller";
import React from "react";

function HakkimizdaKarsilama(props) {
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
                    <h3 className="title">{props.baslik}</h3>
                    <p className="category">{props.altBaslik}</p>
                    <div className="content">
                        <div className="social-description">
                            <h2>{props.detay.kusak}</h2>
                            <p className="pivot-brand">Kuşak</p>
                        </div>
                        <div className="social-description">
                            <h2>{props.detay.oyun}</h2>
                            <p className="pivot-brand">Oyun</p>
                        </div>
                        <div className="social-description">
                            <h2>{props.detay.oyuncu}</h2>
                            <p className="pivot-brand">Oyuncu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HakkimizdaKarsilama;