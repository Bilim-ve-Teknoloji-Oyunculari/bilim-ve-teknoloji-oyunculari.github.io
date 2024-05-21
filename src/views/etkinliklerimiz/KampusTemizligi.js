import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchKampusTemizligi} from "../../contentSlice";
import UstMenu from "../../components/UstMenu.js";
import AltMenu from "../../components/AltMenu.js";
import {
    imgKampusTemizligi1,
    imgKampusTemizligi2,
    imgKampusTemizligi3,
    imgKampusTemizligi4,
    imgKampusTemizligi5,
    imgKampusTemizligi6,
    imgKampusTemizligi7,
    logo01kare
} from "../../assets/img/Gorseller";
import EtkinlikKarsilama from "../../components/EtkinlikKarsilama";
import EtkinlikIcerik from "../../components/EtkinlikIcerik";
import Loading from "../../components/Loading";

function KampusTemizligi() {
    const dispatch = useDispatch()
    const kampusTemizligi = useSelector(state => state.content.kampusTemizligi)
    const status = useSelector(state => state.content.status.KampusTemizligi)

    useEffect(() => {
        dispatch(fetchKampusTemizligi());
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
            console.log("loading: fetchKampusTemizligi");
            return <Loading/>;
        case "failed":
            console.log("failed: fetchKampusTemizligi");
            return null;
        case "idle":
            console.log("idle: fetchKampusTemizligi");
            return (
                <>
                    <UstMenu/>
                    <EtkinlikKarsilama
                        arkaplan={imgKampusTemizligi1}
                        logo={logo01kare}
                        detay={kampusTemizligi.detay}
                    />
                    <EtkinlikIcerik paragraphs={kampusTemizligi.paragraphs}/>

                    <div className="row">
                        <div className="col-md-6 ml-auto mr-auto">
                            <h3 className="title text-center">Etkinlikten Kareler</h3>
                        </div>
                        <div className="tab-content gallery">
                            <div className="tab-pane active" id="home" role="tabpanel">
                                <div className="col-md-10 ml-auto mr-auto">
                                    <div className="row collections">
                                        <div className="col-md-12">
                                            <img src={imgKampusTemizligi1} alt="" loading="lazy"
                                                 className="img-raised"/>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={imgKampusTemizligi2} alt="" loading="lazy"
                                                 className="img-raised"/>
                                            <img src={imgKampusTemizligi3} alt="" loading="lazy"
                                                 className="img-raised"/>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={imgKampusTemizligi4} alt="" loading="lazy"
                                                 className="img-raised"/>
                                            <img src={imgKampusTemizligi5} alt="" loading="lazy"
                                                 className="img-raised"/>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={imgKampusTemizligi6} alt="" loading="lazy"
                                                 className="img-raised"/>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={imgKampusTemizligi7} alt="" loading="lazy"
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
            console.log("default: fetchKampusTemizligi");
            return null;
    }
}

export default KampusTemizligi;
