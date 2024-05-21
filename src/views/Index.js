import React from "react";

// BTO components
import UstMenu from "../components/UstMenu.js";
import KarsilamaSlayti from "../components/KarsilamaSlayti.js";
import AltMenu from "../components/AltMenu.js";
import BizKimiz from "components/BizKimiz";
import YoksulTiyatroNedir from "../components/YoksulTiyatroNedir";
import DuyuruListesi from "../components/DuyuruListesi";
import EtkinlikListesi from "../components/EtkinlikListesi";
import Selamlama from "../components/Selamlama";

function Index() {
    React.useEffect(() => {
        document.body.classList.add("index-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("index-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });
    return (
        <>
            <UstMenu/>
            <KarsilamaSlayti/>
            <Selamlama/>
            <BizKimiz/>
            <YoksulTiyatroNedir/>
            <DuyuruListesi/>
            <EtkinlikListesi/>
            <AltMenu/>
        </>
    );
}

export default Index;

const styles = {
    colorWhiteSmoke: {
        color: "whitesmoke"
    }
}
