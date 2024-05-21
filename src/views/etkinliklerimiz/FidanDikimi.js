import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchFidanDikimi} from "../../contentSlice";
import UstMenu from "../../components/UstMenu.js";
import AltMenu from "../../components/AltMenu.js";
import {
    logo01kare,
    imgFidanDikimi1,
    imgFidanDikimi2,
    imgFidanDikimi3,
    imgFidanDikimi4,
    imgFidanDikimi5,
    imgFidanDikimi6,
    imgFidanDikimi7,
    imgFidanDikimi8,
    imgFidanDikimi9,
    imgFidanDikimi10
} from "../../assets/img/Gorseller";
import EtkinlikKarsilama from "../../components/EtkinlikKarsilama";
import EtkinlikIcerik from "../../components/EtkinlikIcerik";
import Loading from "../../components/Loading";

function FidanDikimi() {
    const dispatch = useDispatch();
    const fidanDikimi = useSelector(state => state.content.fidanDikimi);
    const status = useSelector(state => state.content.status.FidanDikimi);

    useEffect(() => {
        dispatch(fetchFidanDikimi());
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
            console.log("loading: fetchFidanDikimi");
            return <Loading/>;
        case "failed":
            console.log("failed: fetchFidanDikimi");
            return null;
        case "idle":
            console.log("idle: fetchFidanDikimi");
            return (
                <>
                    <UstMenu/>
                    <EtkinlikKarsilama
                        arkaplan={imgFidanDikimi2}
                        logo={logo01kare}
                        detay={fidanDikimi.detay}
                    />
                    <EtkinlikIcerik paragraphs={fidanDikimi.paragraphs}/>

                    <div className="row">
                        <div className="col-md-6 ml-auto mr-auto">
                            <h4 className="title text-center">Etkinlikten Kareler</h4>
                        </div>
                        <div className="tab-content gallery">
                            <div className="tab-pane active" id="home" role="tabpanel">
                                <div className="col-md-10 ml-auto mr-auto">
                                    <div className="row collections">
                                        <div className="col-md-12">
                                            <img src={imgFidanDikimi1} alt="" loading="lazy" className="img-raised"/>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={imgFidanDikimi3} alt="" loading="lazy" className="img-raised"/>
                                            <img src={imgFidanDikimi4} alt="" loading="lazy" className="img-raised"/>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={imgFidanDikimi7} alt="" loading="lazy" className="img-raised"/>
                                            <img src={imgFidanDikimi5} alt="" loading="lazy" className="img-raised"/>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={imgFidanDikimi2} alt="" loading="lazy" className="img-raised"/>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={imgFidanDikimi8} alt="" loading="lazy" className="img-raised"/>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={imgFidanDikimi9} alt="" loading="lazy" className="img-raised"/>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={imgFidanDikimi10} alt="" loading="lazy" className="img-raised"/>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={imgFidanDikimi6} alt="" loading="lazy" className="img-raised"/>
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

export default FidanDikimi;
