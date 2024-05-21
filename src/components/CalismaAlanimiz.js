import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchCalismaAlanimiz} from "../contentSlice";
import Loading from "./Loading";

export default function CalismaAlanimiz() {
    const dispatch = useDispatch();
    const calismaAlanimiz = useSelector((state) => state.content.calismaAlanimiz);
    const status = useSelector((state) => state.content.status.CalismaAlanimiz);
    useEffect(() => {
        dispatch(fetchCalismaAlanimiz());
    }, []);

    switch (status) {
        case "loading":
            console.log("loading: fetchCalismaAlanimiz");
            return <Loading/>;
        case "failed":
            console.log("failed: fetchCalismaAlanimiz");
            return null;
        case "idle":
            console.log("idle: fetchCalismaAlanimiz");
            return (
                <div class="section">
                    <div class="container text-left">
                        <div class="row justify-content-md-center">
                            <div class="col-md-12 col-lg-8">
                                <h2 class="title">{calismaAlanimiz.title}</h2>
                                {
                                    calismaAlanimiz.paragraphs.map((paragraph, index) => {
                                        return (
                                            <p className="description" key={index}>
                                                {paragraph.map((row, index) => {
                                                    return <a key={index}>{row}<br/></a>
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
            return null;
    }

}