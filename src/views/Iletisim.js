import React, {useEffect} from "react";
import UstMenu from "../components/UstMenu.js";
import AltMenu from "../components/AltMenu.js";
import IletisimKarsilama from "../components/IletisimKarsilama";
import IletisimIcerik from "../components/IletisimIcerik";

export default function Iletisim() {
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
    return (
        <>
            <UstMenu/>
            <IletisimKarsilama/>
            <IletisimIcerik/>
            <AltMenu/>
        </>
    );
}