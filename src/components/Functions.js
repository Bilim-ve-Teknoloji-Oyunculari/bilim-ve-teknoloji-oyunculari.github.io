function ismiGizle(isim) {
    const uzunluk = isim.length;
    const ilkHarf = isim.charAt(0);
    const sonHarf = isim.charAt(uzunluk - 1);
    // const ortaKisim = "*".repeat(uzunluk - 2);
    const ortaKisim = "***"
    return ilkHarf + ortaKisim + sonHarf;
    // return isim;
}

export {ismiGizle};