import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchBirKadinIcinDuet} from "../../contentSlice";

// BTO components
import UstMenu from "../../components/UstMenu.js";
import AltMenu from "../../components/AltMenu.js";
import OyunIcerik from "../../components/OyunIcerik";
import OyunKarsilama from "../../components/OyunKarsilama";
import Loading from "../../components/Loading";

// images
import {
    logo01kare,
    imgBirKadinIcinDuet0,
    imgBirKadinIcinDuet1,
    imgBirKadinIcinDuet2,
    imgBirKadinIcinDuet3,
    imgBirKadinIcinDuet4,
    imgBirKadinIcinDuet5,
    imgBirKadinIcinDuet6,
    imgBirKadinIcinDuet7,
    imgBirKadinIcinDuet8,
    imgBirKadinIcinDuet9,
    imgBirKadinIcinDuet10,
    imgBirKadinIcinDuet11,
} from "../../assets/img/Gorseller";

function BirKadinIcinDuet() {
    const dispacth = useDispatch()
    const birKadinIcinDuet = useSelector(state => state.content.birKadinIcinDuet)
    const status = useSelector(state => state.content.status.BirKadinIcinDuet)
    useEffect(() => {
        dispacth(fetchBirKadinIcinDuet());
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
            console.log("loading: fetchBirKadinIcinDuet");
            return <Loading/>;
        case "failed":
            console.log("failed: fetchBirKadinIcinDuet");
            return null;
        case "idle":
            console.log("idle: fetchBirKadinIcinDuet");
            return (
                <>
                    <UstMenu/>
                    <OyunKarsilama
                        arkaplan={imgBirKadinIcinDuet0}
                        logo={logo01kare}
                        detay={birKadinIcinDuet.detay}
                    />
                    <OyunIcerik oyun={birKadinIcinDuet}/>

                    <div className="row">
                        <div className="col-md-6 ml-auto mr-auto">
                            <h3 className="title text-center">Oyundan Kareler</h3>
                        </div>
                        <div className="tab-content gallery">
                            <div className="tab-pane active" id="home" role="tabpanel">
                                <div className="col-md-10 ml-auto mr-auto">
                                    <div className="row collections">
                                        <div className="col-md-12">
                                            <img src={imgBirKadinIcinDuet10} alt="" loading="lazy"
                                                 className="img-raised"/>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={imgBirKadinIcinDuet2} alt="" loading="lazy"
                                                 className="img-raised"/>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={imgBirKadinIcinDuet3} alt="" loading="lazy"
                                                 className="img-raised"/>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={imgBirKadinIcinDuet4} alt="" loading="lazy"
                                                 className="img-raised"/>
                                            <img src={imgBirKadinIcinDuet5} alt="" loading="lazy"
                                                 className="img-raised"/>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={imgBirKadinIcinDuet9} alt="" loading="lazy"
                                                 className="img-raised"/>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={imgBirKadinIcinDuet1} alt="" loading="lazy"
                                                 className="img-raised"/>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={imgBirKadinIcinDuet6} alt="" loading="lazy"
                                                 className="img-raised"/>
                                            <img src={imgBirKadinIcinDuet8} alt="" loading="lazy"
                                                 className="img-raised"/>
                                        </div>
                                        <div class="col-md-6">
                                            <img src={imgBirKadinIcinDuet0} alt="" loading="lazy"
                                                 className="img-raised"/>
                                        </div>
                                        <div class="col-md-6">
                                            <img src={imgBirKadinIcinDuet11} alt="" loading="lazy"
                                                 className="img-raised"/>
                                        </div>
                                        <div class="col-md-12">
                                            <img src={imgBirKadinIcinDuet7} alt="" loading="lazy"
                                                 className="img-raised"/>
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

export default BirKadinIcinDuet;
