import React from "react";
import UstMenu from "../components/UstMenu.js";
import AltMenu from "../components/AltMenu.js";
import EtkinlikListesi from "../components/EtkinlikListesi";

function Etkinliklerimiz() {
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
            <EtkinlikListesi/>
            <AltMenu/>
        </>
    );
}

export default Etkinliklerimiz;

const styles = {
    colorWhiteSmoke: {
        color: "whitesmoke"
    }
}