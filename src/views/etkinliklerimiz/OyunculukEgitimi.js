import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchOyunculukEgitimi} from "../../contentSlice";
import UstMenu from "../../components/UstMenu.js";
import AltMenu from "../../components/AltMenu.js";
import {
    logo01kare,
    imgHakkimizda3,
    imgHakkimizda1,
    imgHakkimizda2,
    imgKarsilama1,
    imgKarsilama2
} from "../../assets/img/Gorseller";
import EtkinlikKarsilama from "../../components/EtkinlikKarsilama";
import EtkinlikIcerik from "../../components/EtkinlikIcerik";
import Loading from "../../components/Loading";

function OyunculukEgitimi() {
    const dispatch = useDispatch();
    const oyunculukEgitimi = useSelector(state => state.content.oyunculukEgitimi);
    const status = useSelector(state => state.content.status.OyunculukEgitimi);

    useEffect(() => {
        dispatch(fetchOyunculukEgitimi());
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
            console.log("loading: fetchOyunculukEgitimi");
            return <Loading/>;
        case "failed":
            console.log("failed: fetchOyunculukEgitimi");
            return null;
        case "idle":
            console.log("idle: fetchOyunculukEgitimi");
            return (
                <>
                    <UstMenu/>
                    <EtkinlikKarsilama
                        arkaplan={imgHakkimizda3}
                        logo={logo01kare}
                        detay={oyunculukEgitimi.detay}
                    />
                    <EtkinlikIcerik paragraphs={oyunculukEgitimi.paragraphs}/>

                    <div className="row">
                        <div className="col-md-6 ml-auto mr-auto">
                            <h4 className="title text-center">Etkinlikten Kareler</h4>
                        </div>
                        <div className="tab-content gallery">
                            <div className="tab-pane active" id="home" role="tabpanel">
                                <div className="col-md-10 ml-auto mr-auto">
                                    <div className="row collections">
                                        <div className="col-md-6">
                                            <img src={imgHakkimizda1} alt="" loading="lazy" className="img-raised"/>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={imgHakkimizda2} alt="" loading="lazy" className="img-raised"/>
                                            <img src={imgHakkimizda3} alt="" loading="lazy" className="img-raised"/>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={imgKarsilama1} alt="" loading="lazy" className="img-raised"/>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={imgKarsilama2} alt="" loading="lazy" className="img-raised"/>
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
            console.log("default: fetchOyunculukEgitimi");
            return null;
    }
}

export default OyunculukEgitimi;
