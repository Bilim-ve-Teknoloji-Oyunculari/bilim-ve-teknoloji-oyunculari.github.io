import {logo01kare} from "../assets/img/Gorseller";

function Selamlama() {
    return (
        <div className="main">
            <div className="section">
                <div className="container text-left">
                    <div className="row justify-content-md-center">
                        <div className="col-md-12 col-lg-8 text-center">
                            <h1 className="title">Merhaba</h1>
                            <div>
                                <img
                                    alt="..."
                                    style={{"height": "40vh"}}
                                    src={logo01kare}
                                    loading="lazy"
                                ></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Selamlama;