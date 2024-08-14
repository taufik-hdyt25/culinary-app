import { Dimensions } from "react-native";

/* eslint-disable prettier/prettier */
export function hitungWeton(tanggalLahir:any) {
    const namaHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const weton = ['Legi', 'Pahing', 'Pon', 'Wage', 'Kliwon'];

    // Ubah string tanggal lahir menjadi objek Date
    const tgl = new Date(tanggalLahir);

    // Hitung hari lahir
    const hariLahir = namaHari[tgl.getDay()];

    // Hitung weton
    const pasaran = weton[(tgl.getDate() - 1) % 5];

    return { hariLahir, pasaran };
}

export const {height : screenHeight,width: screenWidth} = Dimensions.get("window")

