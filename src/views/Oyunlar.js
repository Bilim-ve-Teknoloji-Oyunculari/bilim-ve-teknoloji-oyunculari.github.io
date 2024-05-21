import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchOyunlar} from "../contentSlice";
import UstMenu from "../components/UstMenu.js";
import AltMenu from "../components/AltMenu.js";
import Kart from "../components/Kart";
import Loading from "../components/Loading";

function Oyunlar() {
    // const oyunlar = useSelector(getOyunlar);
    const dispatch = useDispatch()
    const oyunlar = useSelector(state => state.content.oyunlar)
    const status = useSelector(state => state.content.status.Oyunlar)

    useEffect(() => {
        dispatch(fetchOyunlar());
    }, []);

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

    switch (status) {
        case "loading":
            console.log("loading: fetchOyunlar");
            return <Loading/>;
        case "failed":
            console.log("failed: fetchOyunlar");
            return null;
        case "idle":
            console.log("idle: fetchOyunlar");
            return (
                <>
                    <UstMenu/>
                    <div className="wrapper">
                        <div className="section clear-filter" filter-color="orange" style={{backgroundColor: "orange"}}>
                            <div className="container text-center">
                                <div className="row justify-content-md-center">
                                    <div className="col-md-12 col-lg-8">
                                        <h2 className="title" style={styles.colorWhiteSmoke}>Sahnelenen Oyunlarımız</h2>
                                        <h5 className="description" style={styles.colorWhiteSmoke}>Bilim ve Teknoloji
                                            Oyuncuları
                                            olarak sahnelediğimiz oyunlar.</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main">
                        </div>

                        <div className="section">
                            <div className="container text-left">
                                <div className="row justify-content-md-center">
                                    {oyunlar.map((oyun, index) => {
                                        return (
                                            <Kart
                                                img={oyun.img}
                                                name={oyun.name}
                                                location={oyun.location}
                                                description={oyun.description}
                                                link={oyun.link}
                                                key={index}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <AltMenu/>
                </>
            );
        default:
            console.log("default: fetchOyunlar");
            return null;
    }
}

export default Oyunlar;

const styles = {
    colorWhiteSmoke: {
        color: "whitesmoke"
    }
}