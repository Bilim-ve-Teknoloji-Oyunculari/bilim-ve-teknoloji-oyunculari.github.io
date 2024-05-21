import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchIletisim} from "../contentSlice";
import {imgHakkimizda3, logo01kare} from "../assets/img/Gorseller";
import Loading from "./Loading";

function IletisimKarsilama(props) {
    const dispatch = useDispatch();
    const status = useSelector(state => state.content.status.Iletisim);
    // const {karsilama} = useSelector(state => state.content.iletisim);
    const iletisim = useSelector(state => state.content.iletisim);

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
            const karsilama = iletisim.karsilama
            return (
                <div className="wrapper profile-page">
                    <div className="page-header clear-filter page-header-small" filter-color="orange">
                        <div className="page-header-image" data-parallax="true" style={{
                            backgroundImage: "url(" + imgHakkimizda3 + ")",
                            transform: "translate3d(0px, 0px, 0px);"
                        }}>
                        </div>
                        <div className="container">
                            <div className="photo-container">
                                <img src={logo01kare} alt=""/>
                            </div>
                            <h3 className="title">{karsilama.baslik}</h3>
                            <p className="category">
                                {karsilama.rows.map((row, index) => {
                                    return <a key={index}>{row}<br/></a>
                                })}
                            </p>
                        </div>
                    </div>
                </div>
            );
        default:
            console.log("default: fetchIletisim")
            return null;
    }
}

export default IletisimKarsilama;