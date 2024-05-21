/*eslint-disable*/
import React from "react";

/* TODO Geliştirilen tablo bileşeni test edilecek. */
function AltMenu() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer" data-background-color="black">
            <div className=" container ">
                <div className="social-area">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <h3 className="title">Bizi Takip Edin</h3>
                            <a
                                href="https://www.instagram.com/bilimveteknolojioyunculari/"
                                className="btn btn-social btn-instagram btn-neutral"
                                target="_blank"
                                style={{marginRight: "1rem"}}
                            >
                                <i className="fab fa-instagram"></i> Instagram
                            </a>
                            <a
                                href="https://www.youtube.com/@bilimveteknolojioyunculari"
                                className="btn btn-social btn-youtube btn-neutral"
                                target="_blank"
                                style={{marginRight: "1rem"}}
                            >
                                <i className="fab fa-youtube"></i> YouTube
                            </a>
                            <a
                                href="https://discord.com/channels/676516409005834241/788044606099947600"
                                className="btn btn-social btn-discord btn-neutral"
                                target="_blank"
                                style={{marginRight: "1rem"}}
                            >
                                <i className="fab fa-discord"></i> Discord
                            </a>
                            <a
                                href="https://chat.whatsapp.com/InkBFG3smDl2nqUSqZMieZ"
                                className="btn btn-social btn-whatsapp btn-neutral"
                                target="_blank"
                            >
                                <i className="fab fa-whatsapp"></i> WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <h3 className="title">Bize Ulaşın</h3>
                        <p>
                            <b style={{marginRight: "1rem"}}>E-posta:</b>
                            <a className="btn" href="mailto:tiyatro@atu.edu.tr" style={{marginRight: "1rem"}}
                            >tiyatro@atu.edu.tr</a
                            >
                        </p>
                        <p>
                            <b style={{marginRight: "1rem"}}>Yol Tarifi</b>
                            <a
                                className="btn"
                                href="https://goo.gl/maps/5D97HSvkBt4XQGUE9"
                                target="_blank"
                            >
                                Google Haritalar
                            </a>
                        </p>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="/"> BTO </a>
                        </li>
                        <li>
                            <a href="/hakkimizda"> Hakkımızda </a>
                        </li>
                        <li>
                            <a href="/iletisim"> İletişim </a>
                        </li>
                    </ul>
                </nav>
                <div className="copyright" id="copyright">
                    &copy;&nbsp;Copyright&nbsp;{currentYear}&nbsp;Bilim ve Teknoloji Oyuncuları - Tüm Hakları Saklıdır.
                </div>
            </div>
        </footer>
    );
}

export default AltMenu;
