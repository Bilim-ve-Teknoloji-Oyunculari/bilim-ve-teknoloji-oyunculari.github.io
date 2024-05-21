import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchCimri} from "../../contentSlice";

// BTO components
import UstMenu from "../../components/UstMenu.js";
import AltMenu from "../../components/AltMenu.js";
import OyunIcerik from "../../components/OyunIcerik";
import OyunKarsilama from "../../components/OyunKarsilama";
import Loading from "../../components/Loading";

// images
import {
    logo01kare,
    imgCimri1,
    imgCimri2,
    imgCimri3,
    imgCimri4,
    imgCimri5,
    imgCimri6,
    imgCimri7,
    imgCimri8,
    imgCimri9,
    imgCimri10,
    imgCimriAnimation, imgKarsilama1,
} from "../../assets/img/Gorseller";

function Cimri() {
    const dispacth = useDispatch()
    const cimri = useSelector(state => state.content.cimri)
    const status = useSelector(state => state.content.status.Cimri)
    useEffect(() => {
        dispacth(fetchCimri());
    }, []);

    React.useEffect(() => {
        document.body.classList.add("profile-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("profile-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });

    switch (status) {
        case "loading":
            console.log("loading: fetchCimri");
            return <Loading/>;
        case "failed":
            console.log("failed: fetchCimri");
            return null;
        case "idle":
            console.log("idle: fetchCimri");
            return (
                <>
                    <UstMenu/>
                    <OyunKarsilama
                        arkaplan={imgKarsilama1}
                        logo={logo01kare}
                        detay={cimri.detay}
                    />
                    <OyunIcerik oyun={cimri}/>

                    <div className="row">
                        <div className="col-md-6 ml-auto mr-auto">
                            <h3 className="title text-center">Oyundan Kareler</h3>
                        </div>
                        <div className="tab-content gallery">
                            <div className="tab-pane active" id="home" role="tabpanel">
                                <div className="col-md-10 ml-auto mr-auto">
                                    <div className="row collections">
                                        <div className="col-md-6">
                                            <img src={imgCimri1} alt="" loading="lazy" className="img-raised"/>
                                            <img src={imgCimri2} alt="" loading="lazy" className="img-raised"/>
                                            <img src={imgCimri3} alt="" loading="lazy" className="img-raised"/>
                                            <img src={imgCimri4} alt="" loading="lazy" className="img-raised"/>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={imgCimri5} alt="" loading="lazy" className="img-raised"/>
                                            <img src={imgCimri6} alt="" loading="lazy" className="img-raised"/>
                                            <img src={imgCimri7} alt="" loading="lazy" className="img-raised"/>
                                            <img src={imgCimri8} alt="" loading="lazy" className="img-raised"/>
                                        </div>
                                        <div class="col-md-6">
                                            <img src={imgCimri9} alt="" loading="lazy" class="img-raised"/>
                                            <img src={imgCimri10} alt="" loading="lazy" class="img-raised"/>
                                        </div>
                                        <div class="col-md-6">
                                            <img src={imgCimriAnimation} alt="" class="img-raised" loading="lazy"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <AltMenu/>
                </>
            );
        default:
            console.log("default: fetchCimri");
            return null;
    }
}

export default Cimri;
