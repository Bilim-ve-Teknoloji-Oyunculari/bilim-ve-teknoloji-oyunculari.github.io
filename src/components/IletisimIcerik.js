import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchIletisim} from "../contentSlice";
import Loading from "./Loading";

function IletisimIcerik(props) {
    const dispatch = useDispatch();
    const iletisim = useSelector((state) => state.content.iletisim);
    const status = useSelector((state) => state.content.status.Iletisim);

    useEffect(() => {
        dispatch(fetchIletisim());
    }, []);

    switch (status) {
        case "loading":
            console.log("loading: fetchIletisim");
            return <Loading/>;
        case "failed":
            console.log("failed: fetchIletisim");
            return null;
        case "idle":
            console.log("idle: fetchIletisim");
            const kanallar = iletisim.kanallar
            return (
                <div className="section">
                    <div className="container text-left">
                        <div className="row justify-content-md-center">
                            <div className="col-md-12 col-lg-8">
                                {
                                    Object.keys(kanallar).map((kanal, index) => {
                                        return (
                                            <p key={index}>
                                                <i className={kanallar[kanal].ikon} style={styles.icon}></i>
                                                <b style={styles.title}>{kanal}:</b>
                                                <a className="btn" href={kanallar[kanal].link}
                                                   target="_blank" style={styles.btn}>{kanallar[kanal].metin}</a>
                                            </p>
                                        )
                                    })}
                                <h4 style={styles.title}>Yol Tarifi Al</h4>
                                <p>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.759458205865!2d35.386564799999995!3d37.039381299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1528936f823157e3%3A0x3fa5ae549687eb15!2sBilim%20ve%20Teknoloji%20Oyuncular%C4%B1!5e0!3m2!1str!2str!4v1689863878587!5m2!1str!2str"
                                        width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            );
        default:
            console.log("default: fetchIletisim")
            return null;
    }
}

const styles = {
    icon: {
        marginRight: "10px",
        fontSize: "1.3rem"
    },
    title: {
        marginRight: "10px",
        fontSize: "1.3rem"
    },
    btn: {
        marginRight: "10px",
        // fontSize: "1.2rem"
    }
}

export default IletisimIcerik;