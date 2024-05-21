import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchEtkinlikTakvimi} from "../contentSlice";
import UstMenu from "../components/UstMenu.js";
import AltMenu from "../components/AltMenu.js";
import Loading from "../components/Loading";

// FullCalendar imports
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from "@fullcalendar/interaction"
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list';
import trLocale from '@fullcalendar/core/locales/tr';

function EtkinlikTakvimi() {
    const dispatch = useDispatch();
    const status = useSelector(state => state.content.status.EtkinlikTakvimi);
    const events = useSelector(state => state.content.etkinlikTakvimi);

    useEffect(() => {
        dispatch(fetchEtkinlikTakvimi());
    }, []);

    React.useEffect(() => {
        document.body.classList.add("index-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("index-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });

    switch (status) {
        case "loading":
            console.log("loading: fetchEtkinlikTakvimi");
            return <Loading/>;
        case "failed":
            console.log("failed: fetchEtkinlikTakvimi");
            return null;
        case "idle":
            console.log("idle: fetchEtkinlikTakvimi");
            const lastEventDate = calculateLastEventDate(events);
            return (
                <>
                    <UstMenu/>
                    <div className="wrapper">
                        <div className="section clear-filter" filter-color="orange" style={{backgroundColor: "orange"}}>
                            <div className="container text-center">
                                <div className="row justify-content-md-center">
                                    <div className="col-md-12 col-lg-8">
                                        <h2 className="title" style={styles.colorWhiteSmoke}>Etkinlik Takvimi</h2>
                                        <h5 className="description" style={styles.colorWhiteSmoke}>Tiyatro Öğrenci
                                            Topluluğu
                                            olarak düzenlediğimiz etkinlikler.</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main">
                        </div>

                        <div className="section">
                            <div className="container text-left">
                                <FullCalendar
                                    plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
                                    initialView='dayGridMonth'
                                    headerToolbar={{
                                        right: 'today prev,next',
                                        center: 'title',
                                        left: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
                                    }}
                                    timeZone={'local'}
                                    locale={trLocale}
                                    weekends={true}
                                    events={events}
                                    initialDate={lastEventDate}
                                />
                            </div>
                        </div>
                    </div>
                    <AltMenu/>
                </>
            );
        default:
            console.log("default: fetchEtkinlikTakvimi");
            return null;
    }
}

const styles = {
    colorWhiteSmoke: {
        color: "whitesmoke"
    }
}

function calculateLastEventDate(events) {
    if (events.length === 0) {
        return null;
    }
    let lastDate = events[0].start;
    for (let i = 1; i < events.length; i++) {
        if (events[i].start > lastDate) {
            lastDate = events[i].start;
        }
    }
    return lastDate;
}

export default EtkinlikTakvimi;
