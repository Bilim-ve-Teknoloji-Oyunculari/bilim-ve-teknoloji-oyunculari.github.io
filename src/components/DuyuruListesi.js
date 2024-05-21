import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchDuyurular} from "../contentSlice";
import Loading from "./Loading";

function DuyuruListesi() {
    const dispatch = useDispatch();
    const duyurular = useSelector((state) => state.content.duyurular);
    const status = useSelector((state) => state.content.status.Duyurular);

    useEffect(() => {
        dispatch(fetchDuyurular());
    }, []);

    switch (status) {
        case "loading":
            console.log("loading: fetchDuyurular");
            return <Loading/>;
        case "failed":
            console.log("failed: fetchDuyurular");
            return null;
        case "idle":
            console.log("idle: fetchDuyurular");
            return (
                <div className="wrapper">
                    <div className="section clear-filter" filter-color="orange" style={{backgroundColor: "orange"}}>
                        <div className="container text-center">
                            <div className="row justify-content-md-center">
                                <div className="col-md-12 col-lg-8">
                                    <h2 className="title" style={styles.colorWhiteSmoke}>Duyurular</h2>
                                    <h5 className="description" style={styles.colorWhiteSmoke}></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main">
                    </div>

                    <div className="section">
                        <div className="container text-left">
                            <div className="row justify-content-md-center">
                                {duyurular.map(duyuru => {
                                    return (
                                        <div className="col-md-12 col-lg-12" key={duyuru.name}>
                                            <div className="card" style={{width: "100%"}}>
                                                <div className="row">
                                                    <div className="col-md-4 col-12">
                                                        {/* Sol kısımda resim */}
                                                        <img
                                                            className="card-img-top"
                                                            src={duyuru.img}
                                                            alt="Etkinlik Görseli"
                                                            style={{height: "100%", objectFit: "cover"}}
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <div className="col-md-8 col-12">
                                                        <div className="card-body">
                                                            {/* Sağ kısımda başlık */}
                                                            <h3 className="card-title">{duyuru.name}</h3>
                                                            {/* Sağ kısımda açıklama */}
                                                            <p className="card-text description" style={{
                                                                overflow: "auto",
                                                                maxHeight: "16rem"
                                                            }}>{duyuru.description}</p>
                                                            {/* Dilerseniz İncele butonunu buraya ekleyebilirsiniz */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    // return (
                                    //     <div className="col-md-12 col-lg-6">
                                    //         <div className="card bg-dark text-white">
                                    //             <img className="card-img" src={duyuru.img} alt="Card image"/>
                                    //             <div className="card-img-overlay"
                                    //                  style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
                                    //                 <h4 className="card-title" style={{marginTop:"0px"}}>{duyuru.name}</h4>
                                    //                 <p className="card-text" style={{
                                    //                     overflow: "auto",
                                    //                     height: "80%",
                                    //                     fontWeight: "400"
                                    //                 }}>{duyuru.description}</p>
                                    //                 {/*<p className="card-text">Last updated 3 mins ago</p>*/}
                                    //             </div>
                                    //         </div>
                                    //     </div>
                                    // )
                                    // return (
                                    //     <div className="col-md-12 col-lg-6">
                                    //         <div className="card bg-dark text-white">
                                    //             {/* Arka plan resmi */}
                                    //             <img className="card-img" src={duyuru.img} alt="Card image" />
                                    //             <div className="card-img-overlay" style={{
                                    //                 background: "linear-gradient(to bottom right, rgba(0, 0, 0, 1), transparent)",
                                    //             }}>
                                    //                 <h4 className="card-title" style={{ marginTop: "0px" }}>{duyuru.name}</h4>
                                    //                 <p className="card-text" style={{
                                    //                     overflow: "auto",
                                    //                     height: "80%",
                                    //                     fontWeight: "400",
                                    //                 }}>{duyuru.description}</p>
                                    //                 {/*<p className="card-text">Last updated 3 mins ago</p>*/}
                                    //             </div>
                                    //         </div>
                                    //     </div>
                                    // )

                                })}
                            </div>
                        </div>
                    </div>
                </div>
            );
        default:
            console.log("default: fetchDuyurular");
            return null;
    }
}

export default DuyuruListesi;


const styles = {
    colorWhiteSmoke: {
        color: "whitesmoke"
    }
}