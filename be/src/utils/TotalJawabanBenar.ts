interface Jawaban {
  soal: string;
  status: boolean;
}

type Kategori = {
  kategori: string;
  soal: string;
  jawaban: Jawaban;
};

export function TotalJawabanBenar(params: Kategori[]) {
  const benar = [];
  const salah = [];
  for (let entry of params) {
    if (entry.jawaban.status === true) {
      benar.push(entry);
    } else {
      salah.push(entry);
    }
  }
  return {
    benar: benar,
    salah: salah,
  };
}
