"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TotalJawabanBenar = void 0;
function TotalJawabanBenar(params) {
    const benar = [];
    const salah = [];
    for (let entry of params) {
        if (entry.jawaban.status === true) {
            benar.push(entry);
        }
        else {
            salah.push(entry);
        }
    }
    return {
        benar: benar,
        salah: salah,
    };
}
exports.TotalJawabanBenar = TotalJawabanBenar;
