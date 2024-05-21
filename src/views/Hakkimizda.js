import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchHakkimizda} from "../contentSlice";
import UstMenu from "../components/UstMenu.js";
import AltMenu from "../components/AltMenu.js";
import BizKimiz from "../components/BizKimiz";
import CalismaAlanimiz from "../components/CalismaAlanimiz";
import YoksulTiyatroNedir from "../components/YoksulTiyatroNedir";
import {
    imgHakkimizda1,
    imgHakkimizda2,
    imgHakkimizda3,
    imgKarsilama1,
    imgKusak2,
    imgKusak3,
    imgKusak4,
    logo01kare
} from "../assets/img/Gorseller";
import HakkimizdaKarsilama from "../components/HakkimizdaKarsilama";
import Loading from "../components/Loading";

function Hakkimizda() {
    const dispatch = useDispatch();
    const hakkimizda = useSelector(state => state.content.hakkimizda);
    const status = useSelector(state => state.content.status.Hakkimizda);

    useEffect(() => {
        dispatch(fetchHakkimizda());
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
            console.log("loading: fetchHakkimizda");
            return <Loading/>;
        case "failed":
            console.log("failed: fetchHakkimizda");
            return null;
        case "idle":
            console.log("idle: fetchHakkimizda");
            return (
                <>
                    <UstMenu/>
                    <HakkimizdaKarsilama
                        arkaplan={imgKarsilama1}
                        logo={logo01kare}
                        baslik={hakkimizda.baslik}
                        altBaslik={hakkimizda.altBaslik}
                        detay={hakkimizda.detay}
                    />
                    <BizKimiz/>
                    <YoksulTiyatroNedir/>
                    <CalismaAlanimiz/>

                    <div class="row">
                        <div class="col-md-6 ml-auto mr-auto">
                            <h3 class="title text-center">Siyah Halımız</h3>
                        </div>
                        <div class="tab-content gallery">
                            <div class="tab-pane active" id="home" role="tabpanel">
                                <div class="col-md-10 ml-auto mr-auto">
                                    <div class="row collections">
                                        <div class="col-md-6">
                                            <img src={imgHakkimizda3} alt="" class="img-raised" loading="lazy"/>
                                            <img src={imgHakkimizda2} alt="" class="img-raised" loading="lazy"/>
                                        </div>
                                        <div class="col-md-6">
                                            <img src={imgHakkimizda1} alt="" class="img-raised" loading="lazy"/>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={imgKusak2} alt="" class="img-raised" loading="lazy"/>
                                            <img src={imgKusak3} alt="" class="img-raised" loading="lazy"/>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={imgKusak4} alt="" class="img-raised" loading="lazy"/>
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
            console.log("default: fetchHakkimizda");
            return null;
    }
}

export default Hakkimizda;
