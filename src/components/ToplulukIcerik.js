import React from "react";
import {useSelector} from "react-redux";
import {ismiGizle} from "./Functions";

function ToplulukIcerik(props) {
    const {kurullar, akademikDanisman, bizKimiz, uyelikSureci} = useSelector(state => state.content.topluluk);
    return (
        <div className="section">
            <div className="container">
                <div className="section">
                    <div className="container text-left">
                        <div className="row justify-content-md-center">
                            <div className="col-md-12 col-lg-8">
                                <h2 className="title">Biz Kimiz</h2>
                                <p className="description">
                                    {bizKimiz.rows.map((row, index) => {
                                        return <a key={index}>{row}<br/></a>
                                    })}
                                </p>
                                <h2 className="title">Organizasyon Yapımız</h2>
                                <h3 className="title">Akademik Danışman</h3>
                                <p className="description">{akademikDanisman}</p>
                                {
                                    Object.keys(kurullar).map((kurul, index) => {
                                            return (
                                                <div key={index}>
                                                    <h3 className="title">{kurul.charAt(0).toUpperCase() + kurul.slice(1)} Kurulu</h3>
                                                    <p className="description">
                                                        <div style={styles.tableBox}>
                                                            <table style={styles.table}>
                                                                <thead className="text-primary">
                                                                <tr>
                                                                    <th>
                                                                        Kişi
                                                                    </th>
                                                                    {kurul === "yönetim" ? <th>Görev</th> : null}
                                                                </tr>
                                                                </thead>
                                                                <tbody className="text-center">
                                                                {
                                                                    kurullar[kurul].map((kisi, index) => {
                                                                        return (
                                                                            <tr key={index}>
                                                                                <td>
                                                                                    {
                                                                                        kisi.kisi.split(" ").map(isim => ismiGizle(isim)).join(" ")
                                                                                    }
                                                                                </td>
                                                                                {kisi.gorev ?
                                                                                    <td>{kisi.gorev}</td> : null}
                                                                            </tr>
                                                                        )
                                                                    })
                                                                }
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </p>
                                                </div>
                                            )
                                        }
                                    )
                                }
                                <h2 className="title">Topluluk İşlemleri Hakkında</h2>
                                <h3 className="title">Üyelik Süreci</h3>
                                <p className="description">
                                    <h4>ATÜ Tiyatro Öğrenci Topluluğu Üyelik Alımı!</h4>
                                    {uyelikSureci.rows.map((row, index) => {
                                        return <a key={index}>{row}<br/></a>
                                    })}
                                </p>
                            </div>
                        </div>
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

export default ToplulukIcerik;
