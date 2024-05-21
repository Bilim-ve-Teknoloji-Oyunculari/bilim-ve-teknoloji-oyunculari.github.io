import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchKulis} from "../contentSlice";
import Loading from "../components/Loading";

// BTO components
import UstMenu from "../components/UstMenu.js";
import AltMenu from "../components/AltMenu.js";
import Kusak from "../components/Kusak";
import KulisKarsilama from "../components/KulisKarsilama";

function Kulis() {
    const dispatch = useDispatch()
    const status = useSelector(state => state.content.status.Kulis)
    const kulis = useSelector(state => state.content.kulis)
    useEffect(() => {
        dispatch(fetchKulis());
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
            console.log("loading: fetchKulis");
            return <Loading/>;
        case "failed":
            console.log("failed: fetchKulis");
            return null;
        case "idle":
            console.log("idle: fetchKulis");
            const kusaklar = kulis.kusaklar;
            return (
                <>
                    <UstMenu/>
                    <KulisKarsilama/>
                    {status === "loading" && <div>Loading...</div>}
                    {status === "failed" && <div>Failed...</div>}
                    {status === "idle" &&
                        Object.keys(kusaklar).map((key, index) => {
                            return (
                                <Kusak
                                    kusakNo={kusaklar[key].kusak}
                                    aciklama={kusaklar[key].aciklama}
                                    yonetmen={kusaklar[key].yonetmen}
                                    kulis={kusaklar[key].kulis}
                                    reji={kusaklar[key].reji}
                                    key={index}
                                />
                            )
                        })}
                    <AltMenu/>
                </>
            )
        default:
            console.log("default: fetchKulis");
            return null;
    }
}


const styles = {
    tableBox: {marginLeft: "15%", marginRight: "15%"},
    table: {width: "100%"}
};

export default Kulis;
