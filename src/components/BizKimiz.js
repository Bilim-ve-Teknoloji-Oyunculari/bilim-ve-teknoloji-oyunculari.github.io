import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchBizKimiz} from "../contentSlice";
import Loading from "./Loading";

export default function BizKimiz() {
    const dispatch = useDispatch();
    const bizKimiz = useSelector((state) => state.content.bizKimiz);
    const statusBizKimiz = useSelector((state) => state.content.status.BizKimiz);
    useEffect(() => {
        dispatch(fetchBizKimiz());
    }, []);


    switch (statusBizKimiz) {
        case "loading":
            console.log("loading: fetchBizKimiz");
            return <Loading/>;
        case "failed":
            console.log("failed: fetchBizKimiz");
            return null;
        case "idle":
            console.log("idle: fetchBizKimiz");
            return (
                <div className="section">
                    <div className="container text-center">
                        <div className="row justify-content-md-center">
                            <div className="col-md-12 col-lg-8">
                                <h2 className="title">{bizKimiz.title}</h2>
                                {
                                    bizKimiz.paragraphs.map((paragraph, index) => {
                                        return (
                                            <p className="description" key={index}>
                                                {paragraph.map((row, index) => {
                                                    return <span key={index}>{row}<br/></span>
                                                })}
                                            </p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            );
        default:
            console.log("default: fetchBizKimiz");
            return null;
    }

}
