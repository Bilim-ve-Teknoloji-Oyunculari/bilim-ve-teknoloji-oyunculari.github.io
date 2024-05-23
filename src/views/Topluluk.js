import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchTopluluk} from "../contentSlice";
import UstMenu from "../components/UstMenu.js";
import AltMenu from "../components/AltMenu.js";
import {logo01kare, imgKarsilama3} from "../assets/img/Gorseller";
import ToplulukKarsilama from "../components/ToplulukKarsilama";
import ToplulukIcerik from "../components/ToplulukIcerik";
import Loading from "../components/Loading";

function Topluluk() {
    const dispatch = useDispatch();
    const topluluk = useSelector(state => state.content.topluluk);
    const status = useSelector(state => state.content.status.Topluluk);

    useEffect(() => {
        dispatch(fetchTopluluk());
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
            console.log("loading: fetchTopluluk");
            return <Loading/>;
        case "failed":
            console.log("failed: fetchTopluluk");
            return null;
        case "idle":
            console.log("idle: fetchTopluluk");
            return (
                <>
                    <UstMenu/>
                    <ToplulukKarsilama
                        arkaplan={imgKarsilama3}
                        logo={logo01kare}
                        baslik={topluluk.detay.baslik}
                        altBaslik={topluluk.detay.altBaslik}
                        detay={topluluk.detay}
                    />
                    <ToplulukIcerik/>
                    <AltMenu/>
                </>
            );
        default:
            console.log("default: fetchTopluluk");
            return null;
    }
}

const styles = {
    tableBox: {marginLeft: "15%", marginRight: "15%"},
    table: {width: "100%"}
};

export default Topluluk;
