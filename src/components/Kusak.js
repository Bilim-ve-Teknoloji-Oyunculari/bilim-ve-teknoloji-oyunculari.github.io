import {ismiGizle} from "./Functions";
import React from "react";

function Kusak(props) {
    return (
        <div className="section">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-12 col-lg-8">
                        <h2 className="title">{props.kusakNo}.Kuşak</h2>
                        <p className="description">
                            {props.aciklama}
                        </p>
                        <h3 className="title">Yönetmen</h3>
                        <p className="description">
                            {props.yonetmen}
                        </p>
                        {props.kulis && (
                            <h3 className="title">Kulis Ekibi</h3>
                        )}
                        {props.kulis && (
                            <p className="description">
                                <div style={styles.tableBox}>
                                    <table style={styles.table}>
                                        <thead className="text-primary">
                                        <tr>
                                            <th>İsim Soyisim</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        {
                                            props.kulis.map((kisi, index) => (
                                                <tr key={index}>
                                                    <td>{kisi.split(" ").map(isim => ismiGizle(isim)).join(" ")}</td>
                                                </tr>
                                            ))
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </p>
                        )}

                        {props.reji && (
                            <h3 className="title">Reji Ekibi</h3>
                        )}
                        {props.reji && (
                            Object.keys(props.reji).map((donem, index) => (
                                    <p className="description" key={index}>
                                        <div style={styles.tableBox}>
                                            <table style={styles.table}>
                                                <thead className="text-primary">
                                                <tr>
                                                    <th>Dönem</th>
                                                    <th>Görev</th>
                                                    <th>Başlangıç</th>
                                                    <th>Bitiş</th>
                                                    <th>İsim Soyisim</th>
                                                </tr>
                                                </thead>
                                                <tbody className="text-center">
                                                {props.reji[donem].map((kisi, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{donem}</td>
                                                                <td>{kisi.gorev}</td>
                                                                <td>{kisi.baslangic}</td>
                                                                <td>{kisi.bitis}</td>
                                                                <td>{kisi.kisi.split(" ").map(isim => ismiGizle(isim)).join(" ")}</td>
                                                            </tr>
                                                        )
                                                    }
                                                )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </p>
                                )
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    tableBox: {marginLeft: "15%", marginRight: "15%"},
    table: {width: "100%"}
};

export default Kusak;