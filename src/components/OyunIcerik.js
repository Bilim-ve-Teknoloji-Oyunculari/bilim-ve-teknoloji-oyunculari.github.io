import {ismiGizle} from "./Functions";
import React from "react";

function OyunIcerik(props) {
    const oyun = props.oyun
    return (
        <div className="section">
            <div className="container">
                <h5 class="description">
                    {props.oyun.detay.aciklama}
                </h5>
                <h3 class="title">Konusu</h3>
                <h5 class="description">
                    {props.oyun.detay.konu.map(paragraf => {
                        return (<>{paragraf}<br/></>)
                    })}
                </h5>
                <h3 class="title">Oyuncular</h3>
                <h5 className="description">
                    {oyun.oyuncular.map(oyuncu => {
                        return (<>{oyuncu.karakter} : {
                            oyuncu.isim.map(isim => {
                                return (isim.split(" ").map(isimParcalari => ismiGizle(isimParcalari)).join(" "))
                            }).join(", ")
                        }<br/></>)
                    })}
                </h5>
                <h3 class="title">Müzik / Ses</h3>
                <h5 class="description">
                    {oyun.muzikSes.map(kisi => {
                        return (<>{kisi.split(" ").map(isim => ismiGizle(isim)).join(" ")}<br/></>)
                    })}
                </h5>
                <h3 class="title">Işık</h3>
                <h5 class="description">
                    {oyun.isik.map(kisi => {
                        return (<>{kisi.split(" ").map(isim => ismiGizle(isim)).join(" ")}<br/></>)
                    })}
                </h5>
                {oyun.makyaj && (<h3 className="title">Makyaj</h3>)}
                {oyun.makyaj && (
                    <h5 className="description">
                        {oyun.makyaj.map(kisi => {
                            return (<>{kisi.split(" ").map(isim => ismiGizle(isim)).join(" ")}<br/></>)
                        })}
                    </h5>
                )}
                {oyun.sacMakyaj && (<h3 className="title">Saç / Makyaj</h3>)}
                {oyun.sacMakyaj && (
                    <h5 className="description">
                        {oyun.sacMakyaj.map(kisi => {
                            return (<>{kisi.split(" ").map(isim => ismiGizle(isim)).join(" ")}<br/></>)
                        })}
                    </h5>
                )}
                {oyun.kostumAksesuar && (<h3 className="title">Kostüm / Aksesuar</h3>)}
                {oyun.kostumAksesuar && (
                    <h5 className="description">
                        {oyun.kostumAksesuar.map(kisi => {
                            return (<>{kisi.split(" ").map(isim => ismiGizle(isim)).join(" ")}<br/></>)
                        })}
                    </h5>
                )}
                {oyun.kostum && (<h3 className="title">Kostüm</h3>)}
                {oyun.kostum && (
                    <h5 className="description">
                        {oyun.kostum.map(kisi => {
                            return (<>{kisi.split(" ").map(isim => ismiGizle(isim)).join(" ")}<br/></>)
                        })}
                    </h5>
                )}
                {oyun.sadeceDekor && (<h3 className="title">Dekor</h3>)}
                {oyun.sadeceDekor && (
                    <h5 className="description">
                        {oyun.sadeceDekor.map(kisi => {
                            return (<>{kisi.split(" ").map(isim => ismiGizle(isim)).join(" ")}<br/></>)
                        })}
                    </h5>
                )}
                {oyun.dekor && (<h3 className="title">Dekor / Aksesuar</h3>)}
                {oyun.dekor && (
                    <h5 className="description">
                        {oyun.dekor.map(kisi => {
                            return (<>{kisi.split(" ").map(isim => ismiGizle(isim)).join(" ")}<br/></>)
                        })}
                    </h5>
                )}
                {oyun.kostumDekorMakyaj && (<h3 className="title">Kostüm / Dekor / Makyaj</h3>)}
                {oyun.kostumDekorMakyaj && (
                    <h5 className="description">
                        {oyun.kostumDekorMakyaj.map(kisi => {
                            return (<>{kisi.split(" ").map(isim => ismiGizle(isim)).join(" ")}<br/></>)
                        })}
                    </h5>
                )}
                {oyun.tanitim && (<h3 className="title">Tanıtım</h3>)}
                {oyun.tanitim && (
                    <h5 className="description">
                        {oyun.tanitim.map(kisi => {
                            return (<>{kisi.split(" ").map(isim => ismiGizle(isim)).join(" ")}<br/></>)
                        })}
                    </h5>
                )}
                {oyun.seyirciKarsilama && (<h3 className="title">Seyirci Karşılama</h3>)}
                {oyun.seyirciKarsilama && (
                    <h5 className="description">
                        {oyun.seyirciKarsilama.map(kisi => {
                            return (<>{kisi.split(" ").map(isim => ismiGizle(isim)).join(" ")}<br/></>)
                        })}
                    </h5>
                )}
                {oyun.rejiKurgu && (<h3 className="title">Reji / Kurgu</h3>)}
                {oyun.rejiKurgu && (
                    <h5 className="description">
                        {oyun.rejiKurgu.map(kisi => {
                            return (<>{kisi.split(" ").map(isim => ismiGizle(isim)).join(" ")}<br/></>)
                        })}<br/>
                    </h5>
                )}
                {oyun.yonetmen && (<h3 className="title">Yönetmen</h3>)}
                {oyun.yonetmen && (
                    <h5 className="description">
                        {oyun.yonetmen.map(kisi => {
                            return (<>{kisi}<br/></>)
                        })}<br/>
                    </h5>
                )}
                {oyun.akademikDanisman && (<h3 className="title">Akademik Danışman</h3>)}
                {oyun.akademikDanisman && (
                    <h5 className="description">
                        {oyun.akademikDanisman.map(kisi => {
                            return (<>{kisi}<br/></>)
                        })}<br/>
                    </h5>
                )}
            </div>
        </div>
    )
}

export default OyunIcerik
