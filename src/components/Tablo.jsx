// TODO tablo bileşeni geliştirilecek.

function Tablo(props) {
    return (
        <div style={styles.tableBox}>
            <table style={styles.table}>
                <thead className="text-primary">
                <tr>
                    {props.header.map((baslik, index) => {
                        return (<th key={index}>{baslik}</th>)
                    })}
                </tr>
                </thead>
                <tbody className="text-center">
                {kusaklar[key].reji[donem].map((kisi, index) => {
                        return (
                            <tr>
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
    )
}

export default Tablo;

const styles = {
    tableBox: {marginLeft: "15%", marginRight: "15%"},
    table: {width: "100%"}
};
