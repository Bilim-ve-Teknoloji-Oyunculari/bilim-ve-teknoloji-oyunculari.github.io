import {useSelector, useDispatch} from "react-redux";
import {fetchEtkinlikler} from "../contentSlice";

// BTO components
import Kart from "./Kart";
import {useEffect} from "react";
import Loading from "./Loading";

function EtkinlikListesi() {
    const dispatch = useDispatch();
    const etkinlikler = useSelector((state) => state.content.etkinlikler);
    const status = useSelector((state) => state.content.status.Etkinlikler);
    useEffect(() => {
        dispatch(fetchEtkinlikler());
    }, []);

    switch (status) {
        case "loading":
            console.log("loading: fetchEtkinlikler");
            return <Loading/>;
        case "failed":
            console.log("failed: fetchEtkinlikler");
            return null;
        case "idle":
            console.log("idle: fetchEtkinlikler");
            return (
                <div className="wrapper">
                    <div className="section clear-filter" filter-color="orange" style={{backgroundColor: "orange"}}>
                        <div className="container text-center">
                            <div className="row justify-content-md-center">
                                <div className="col-md-12 col-lg-8">
                                    <h2 className="title" style={styles.colorWhiteSmoke}>Etkinliklerimiz</h2>
                                    <h5 className="description" style={styles.colorWhiteSmoke}>Tiyatro Öğrenci Topluluğu
                                        olarak düzenlediğimiz etkinlikler.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main">
                    </div>

                    <div className="section">
                        <div className="container text-left">
                            <div className="row justify-content-md-center">
                                {etkinlikler.map(etkinlik => {
                                    return (
                                        <Kart
                                            name={etkinlik.name}
                                            img={etkinlik.img}
                                            description={etkinlik.description}
                                            link={etkinlik.link}
                                            key={etkinlik.name}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )
        default:
            console.log("default: fetchEtkinlikler");
            return null;
    }

}

export default EtkinlikListesi;


const styles = {
    colorWhiteSmoke: {
        color: "whitesmoke"
    }
}