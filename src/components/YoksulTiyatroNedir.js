import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchYoksulTiyatroNedir} from "../contentSlice";
import Loading from "./Loading";

export default function YoksulTiyatroNedir() {
    const dispatch = useDispatch();
    const yoksulTiyatroNedir = useSelector((state) => state.content.yoksulTiyatroNedir);
    const statusYoksulTiyatroNedir = useSelector((state) => state.content.status.YoksulTiyatroNedir);

    useEffect(() => {
        dispatch(fetchYoksulTiyatroNedir());
    }, []);

    switch (statusYoksulTiyatroNedir) {
        case "loading":
            console.log("loading: fetchYoksulTiyatroNedir");
            return <Loading/>;
        case "failed":
            console.log("failed: fetchYoksulTiyatroNedir");
            return null;
        case "idle":
            console.log("idle: fetchYoksulTiyatroNedir");
            return (
                <div className="section">
                    <div className="container text-center">
                        <div className="row justify-content-md-center">
                            <div className="col-md-12 col-lg-8">
                                <h2 className="title">{yoksulTiyatroNedir.title}</h2>
                                {
                                    yoksulTiyatroNedir.paragraphs.map((paragraph, index) => {
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
    }
}