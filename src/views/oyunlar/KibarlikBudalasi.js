import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchKibarlikBudalasi} from "../../contentSlice";

// BTO components
import UstMenu from "../../components/UstMenu.js";
import AltMenu from "../../components/AltMenu.js";
import OyunKarsilama from "../../components/OyunKarsilama";
import OyunIcerik from "../../components/OyunIcerik";


// images
import {
    logo01kare,
    imgKarsilama2,
    imgKibarlikBudalasi1,
    imgKibarlikBudalasi2,
    imgKibarlikBudalasi3,
    imgKibarlikBudalasi4,
    imgKibarlikBudalasi5,
    imgKibarlikBudalasi6,
} from "../../assets/img/Gorseller";
import Loading from "../../components/Loading";


function KibarlikBudalasi() {
    const dispacth = useDispatch()
    const kibarlikBudalasi = useSelector(state => state.content.kibarlikBudalasi)
    const status = useSelector(state => state.content.status.KibarlikBudalasi)
    useEffect(() => {
        dispacth(fetchKibarlikBudalasi());
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
            console.log("loading: fetchKibarlikBudalasi");
            return <Loading/>;
        case "failed":
            console.log("failed: fetchKibarlikBudalasi");
            return null;
        case "idle":
            console.log("idle: fetchKibarlikBudalasi");
            return (
                <>
                    <UstMenu/>
                    <OyunKarsilama
                        arkaplan={imgKarsilama2}
                        logo={logo01kare}
                        detay={kibarlikBudalasi.detay}
                    />
                    <OyunIcerik oyun={kibarlikBudalasi}/>

                    <div className="row">
                        <div className="col-md-6 ml-auto mr-auto">
                            <h3 className="title text-center">Oyundan Kareler</h3>
                        </div>
                        <div className="tab-content gallery">
                            <div className="tab-pane active" id="home" role="tabpanel">
                                <div className="col-md-10 ml-auto mr-auto">
                                    <div className="row collections">
                                        <div className="col-md-12">
                                            <img src={imgKibarlikBudalasi6} alt="" loading="lazy"
                                                 className="img-raised"/>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={imgKibarlikBudalasi1} alt="" loading="lazy"
                                                 className="img-raised"/>
                                            <img src={imgKibarlikBudalasi2} alt="" loading="lazy"
                                                 className="img-raised"/>
                                            <img src={imgKibarlikBudalasi3} alt="" loading="lazy"
                                                 className="img-raised"/>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={imgKibarlikBudalasi4} alt="" loading="lazy"
                                                 className="img-raised"/>
                                            <img src={imgKibarlikBudalasi5} alt="" loading="lazy"
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
            console.log("default: fetchKibarlikBudalasi");
            return null;
    }
}


export default KibarlikBudalasi;
