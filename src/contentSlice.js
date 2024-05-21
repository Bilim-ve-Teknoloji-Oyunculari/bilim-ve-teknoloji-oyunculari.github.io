import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {database} from "./firebase";
import {get, ref} from "firebase/database";

const initialState = {
    pageTitle: "Bilim ve Teknoloji Oyuncuları",
    status: {}
};

const contentSlice = createSlice({
    name: "content",
    initialState,
    reducers: {
        setPageTitle(state, action) {
            state.pageTitle = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBizKimiz.pending, (state) => {
                state.status.BizKimiz = "loading";
            })
            .addCase(fetchBizKimiz.fulfilled, (state, action) => {
                state.status.BizKimiz = "idle";
                state.bizKimiz = action.payload;
            })
            .addCase(fetchBizKimiz.rejected, (state) => {
                state.status.BizKimiz = "failed";
            })
            .addCase(fetchYoksulTiyatroNedir.pending, (state) => {
                state.status.YoksulTiyatroNedir = "loading";
            })
            .addCase(fetchYoksulTiyatroNedir.fulfilled, (state, action) => {
                state.status.YoksulTiyatroNedir = "idle";
                state.yoksulTiyatroNedir = action.payload;
            })
            .addCase(fetchYoksulTiyatroNedir.rejected, (state) => {
                state.status.YoksulTiyatroNedir = "failed";
            })
            .addCase(fetchDuyurular.pending, (state) => {
                state.status.Duyurular = "loading";
            })
            .addCase(fetchDuyurular.fulfilled, (state, action) => {
                state.status.Duyurular = "idle";
                state.duyurular = action.payload;
            })
            .addCase(fetchDuyurular.rejected, (state) => {
                state.status.Duyurular = "failed";
            })
            .addCase(fetchEtkinlikler.pending, (state) => {
                state.status.Etkinlikler = "loading";
            })
            .addCase(fetchEtkinlikler.fulfilled, (state, action) => {
                state.status.Etkinlikler = "idle";
                state.etkinlikler = action.payload;
            })
            .addCase(fetchEtkinlikler.rejected, (state) => {
                state.status.Etkinlikler = "failed";
            })
            .addCase(fetchCalismaAlanimiz.pending, (state) => {
                state.status.CalismaAlanimiz = "loading";
            })
            .addCase(fetchCalismaAlanimiz.fulfilled, (state, action) => {
                state.status.CalismaAlanimiz = "idle";
                state.calismaAlanimiz = action.payload;
            })
            .addCase(fetchCalismaAlanimiz.rejected, (state) => {
                state.status.CalismaAlanimiz = "failed";
            })
            .addCase(fetchKulis.pending, (state) => {
                state.status.Kulis = "loading";
            })
            .addCase(fetchKulis.fulfilled, (state, action) => {
                state.status.Kulis = "idle";
                state.kulis = action.payload;
            })
            .addCase(fetchKulis.rejected, (state) => {
                state.status.Kulis = "failed";
            })
            .addCase(fetchOyunlar.pending, (state) => {
                state.status.Oyunlar = "loading";

            })
            .addCase(fetchOyunlar.fulfilled, (state, action) => {
                state.status.Oyunlar = "idle";
                state.oyunlar = action.payload;
            })
            .addCase(fetchOyunlar.rejected, (state) => {
                state.status.Oyunlar = "failed";
            })
            .addCase(fetchCimri.pending, (state) => {
                state.status.Cimri = "loading";
            })
            .addCase(fetchCimri.fulfilled, (state, action) => {
                state.status.Cimri = "idle";
                state.cimri = action.payload;
            })
            .addCase(fetchCimri.rejected, (state) => {
                state.status.Cimri = "failed";
            })
            .addCase(fetchKibarlikBudalasi.pending, (state) => {
                state.status.KibarlikBudalasi = "loading";
            })
            .addCase(fetchKibarlikBudalasi.fulfilled, (state, action) => {
                state.status.KibarlikBudalasi = "idle";
                state.kibarlikBudalasi = action.payload;
            })
            .addCase(fetchKibarlikBudalasi.rejected, (state) => {
                state.status.KibarlikBudalasi = "failed";
            })
            .addCase(fetchBirKadinIcinDuet.pending, (state) => {
                state.status.BirKadinIcinDuet = "loading";
            })
            .addCase(fetchBirKadinIcinDuet.fulfilled, (state, action) => {
                state.status.BirKadinIcinDuet = "idle";
                state.birKadinIcinDuet = action.payload;
            })
            .addCase(fetchBirKadinIcinDuet.rejected, (state) => {
                state.status.BirKadinIcinDuet = "failed";
            })
            .addCase(fetchKampusTemizligi.pending, (state) => {
                state.status.KampusTemizligi = "loading";
            })
            .addCase(fetchKampusTemizligi.fulfilled, (state, action) => {
                state.status.KampusTemizligi = "idle";
                state.kampusTemizligi = action.payload;
            })
            .addCase(fetchKampusTemizligi.rejected, (state) => {
                state.status.KampusTemizligi = "failed";
            })
            .addCase(fetchFidanDikimi.pending, (state) => {
                state.status.FidanDikimi = "loading";
            })
            .addCase(fetchFidanDikimi.fulfilled, (state, action) => {
                state.status.FidanDikimi = "idle";
                state.fidanDikimi = action.payload;
            })
            .addCase(fetchFidanDikimi.rejected, (state) => {
                state.status.FidanDikimi = "failed";
            })
            .addCase(fetchOyunculukEgitimi.pending, (state) => {
                state.status.OyunculukEgitimi = "loading";
            })
            .addCase(fetchOyunculukEgitimi.fulfilled, (state, action) => {
                state.status.OyunculukEgitimi = "idle";
                state.oyunculukEgitimi = action.payload;
            })
            .addCase(fetchOyunculukEgitimi.rejected, (state) => {
                state.status.OyunculukEgitimi = "failed";
            })
            .addCase(fetchEtkinlikTakvimi.pending, (state) => {
                state.status.EtkinlikTakvimi = "loading";
            })
            .addCase(fetchEtkinlikTakvimi.fulfilled, (state, action) => {
                state.status.EtkinlikTakvimi = "idle";
                state.etkinlikTakvimi = action.payload;
            })
            .addCase(fetchEtkinlikTakvimi.rejected, (state) => {
                state.status.EtkinlikTakvimi = "failed";
            })
            .addCase(fetchHakkimizda.pending, (state) => {
                state.status.Hakkimizda = "loading";
            })
            .addCase(fetchHakkimizda.fulfilled, (state, action) => {
                state.status.Hakkimizda = "idle";
                state.hakkimizda = action.payload;
            })
            .addCase(fetchHakkimizda.rejected, (state) => {
                state.status.Hakkimizda = "failed";
            })
            .addCase(fetchTopluluk.pending, (state) => {
                state.status.Topluluk = "loading";
            })
            .addCase(fetchTopluluk.fulfilled, (state, action) => {
                state.status.Topluluk = "idle";
                state.topluluk = action.payload;
            })
            .addCase(fetchTopluluk.rejected, (state) => {
                state.status.Topluluk = "failed";
            })
            .addCase(fetchIletisim.pending, (state) => {
                state.status.Iletisim = "loading";
            })
            .addCase(fetchIletisim.fulfilled, (state, action) => {
                state.status.Iletisim = "idle";
                state.iletisim = action.payload;
            })
            .addCase(fetchIletisim.rejected, (state) => {
                state.status.Iletisim = "failed";
            })
    }
});

export default contentSlice.reducer;


const getDataFromFirebase = (query) => get(ref(database, query)).then(snapshot => snapshot.val()).catch(error => console.error(error))

export const fetchContent = createAsyncThunk(
    "content/fetchContent",
    async () => await getDataFromFirebase('pageTitle')
)

export const fetchBizKimiz = createAsyncThunk(
    "content/fetchBizKimiz",
    () => getDataFromFirebase('bizKimiz')
)
export const fetchYoksulTiyatroNedir = createAsyncThunk(
    "content/fetchYoksulTiyatroNedir",
    () => getDataFromFirebase('yoksulTiyatroNedir')
)

export const fetchDuyurular = createAsyncThunk(
    "content/fetchDuyurular",
    () => getDataFromFirebase('duyurular')
)

export const fetchEtkinlikler = createAsyncThunk(
    "content/fetchEtkinlikler",
    () => getDataFromFirebase('etkinlikler')
)

export const fetchCalismaAlanimiz = createAsyncThunk(
    "content/fetchCalismaAlanimiz",
    () => getDataFromFirebase('calismaAlanimiz')
)

export const fetchKulis = createAsyncThunk(
    "content/fetchKulis",
    () => getDataFromFirebase('kulis')
)

export const fetchOyunlar = createAsyncThunk(
    "content/fetchOyunlar",
    () => getDataFromFirebase('oyunlar')
)

export const fetchCimri = createAsyncThunk(
    "content/fetchCimri",
    () => getDataFromFirebase('cimri')
)

export const fetchKibarlikBudalasi = createAsyncThunk(
    "content/fetchKibarlikBudalasi",
    () => getDataFromFirebase('kibarlikBudalasi')
)

export const fetchBirKadinIcinDuet = createAsyncThunk(
    "content/fetchBirKadinIcinDuet",
    () => getDataFromFirebase('birKadinIcinDuet')
)

export const fetchKampusTemizligi = createAsyncThunk(
    "content/fetchKampusTemizligi",
    () => getDataFromFirebase('kampusTemizligi')
)


export const fetchFidanDikimi = createAsyncThunk(
    "content/fetchFidanDikimi",
    () => getDataFromFirebase('fidanDikimi')
)

export const fetchOyunculukEgitimi = createAsyncThunk(
    "content/fetchOyunculukEgitimi",
    () => getDataFromFirebase('oyunculukEgitimi')
)

export const fetchEtkinlikTakvimi = createAsyncThunk(
    "content/fetchEtkinlikTakvimi",
    () => getDataFromFirebase('etkinlikTakvimi')
)

export const fetchHakkimizda = createAsyncThunk(
    "content/fetchHakkimizda",
    () => getDataFromFirebase('hakkimizda')
)

export const fetchTopluluk = createAsyncThunk(
    "content/fetchTopluluk",
    () => getDataFromFirebase('topluluk')
)

export const fetchIletisim = createAsyncThunk(
    "content/fetchIletisim",
    () => getDataFromFirebase('iletisim')
)
