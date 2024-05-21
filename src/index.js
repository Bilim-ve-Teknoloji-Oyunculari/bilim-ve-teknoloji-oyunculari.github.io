import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import {fetchContent} from "./contentSlice";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

// views
import Index from "views/Index.js";
import Oyunlar from "views/Oyunlar.js";
import Cimri from "./views/oyunlar/Cimri";
import KibarlikBudalasi from "./views/oyunlar/KibarlikBudalasi";
import BirKadinIcinDuet from "./views/oyunlar/BirKadinIcinDuet";
import Hakkimizda from "./views/Hakkimizda";
import Etkinliklerimiz from "./views/Etkinliklerimiz";
import Topluluk from "./views/Topluluk";
import Iletisim from "./views/Iletisim";
import Kulis from "./views/Kulis";
import Duyurular from "./views/Duyurular";
import OyunculukEgitimi from "./views/etkinliklerimiz/OyunculukEgitimi";
import KampusTemizligi from "./views/etkinliklerimiz/KampusTemizligi";
import FidanDikimi from "./views/etkinliklerimiz/FidanDikimi";
import EtkinlikTakvimi from "./views/EtkinlikTakvimi";

store.dispatch(fetchContent());

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        < BrowserRouter basename={ `/${process.env.PUBLIC_URL}`}>
            <Routes>
                <Route path="" element={<Index/>}/>
                <Route path="oyunlar" element={<Oyunlar/>}/>
                <Route path="oyunlar/cimri" element={<Cimri/>}/>
                <Route path="oyunlar/kibarlik-budalasi" element={<KibarlikBudalasi/>}/>
                <Route path="oyunlar/bir-kadin-icin-duet" element={<BirKadinIcinDuet/>}/>
                <Route path="kulis" element={<Kulis/>}/>
                <Route path="etkinliklerimiz" element={<Etkinliklerimiz/>}/>
                <Route path="etkinliklerimiz/oyunculuk-egitimi" element={<OyunculukEgitimi/>}/>
                <Route path="etkinliklerimiz/kampus-temizligi" element={<KampusTemizligi/>}/>
                <Route path="etkinliklerimiz/fidan-dikimi" element={<FidanDikimi/>}/>
                <Route path="etkinlik-takvimi" element={<EtkinlikTakvimi/>}/>
                <Route path="duyurular" element={<Duyurular/>}/>
                <Route path="hakkimizda" element={<Hakkimizda/>}/>
                <Route path="topluluk" element={<Topluluk/>}/>
                <Route path="iletisim" element={<Iletisim/>}/>

                <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>
);
