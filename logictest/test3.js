/*
Membeli makan siang dan menabung

Rusli adalah seorang anak sekolah di SD Beever
Setiap harinya, Rusli diberikan uang jajan oleh orang tuanya 
sebesar Rp. 10.000,- rupiah.

Rusli bisa menabung atau membeli makanan di sekolahnya untuk
makan siang. Kita telah diberikan catatan keuangan Rusli
dalam bentuk text biasa, dan kita diminta menghitung
jumlah uang tabungan Rusli per harinya dan total tabungannya.

OUTPUT:
{
    Senin: 2000,
    Selasa: 5500,
    Rabu: 3500,
    Kamis: 7000,
    Jumat: 5500,
    TotalTabungan: 23500
}

*/

function price(food, hargaMakanan, money) {
  let sisaUang = money;

  for (let i = 0; i < hargaMakanan.length; i++) {
    for (let j = 0; j < food.length; j++) {
      if (hargaMakanan[i].nama === food[j]) {
        sisaUang -= hargaMakanan[i].harga;
      }
    }
  }

  return sisaUang;
}

function splitter(str, operator) {
  const result = [];
  let temp = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === operator || i === str.length - 1) {
      if (i === str.length - 1) temp += str[i];
      result.push(temp);
      temp = "";
    } else {
      temp += str[i];
    }
  }

  return result;
}

function jumlahTabungan(listHarga, history) {
  // Write your code here
  let obj = {};
  let totalTabungan = 0;

  const split = splitter(history, ".");
  let dayArr = [];
  for (let i = 0; i < split.length; i++) {
    const day = splitter(split[i], "-");
    dayArr.push(day);
  }

  for (let i = 0; i < dayArr.length; i++) {
    const food = splitter(dayArr[i][1], ",");
    const uang = price(food, hargaMakanan, 10000);

    obj[dayArr[i][0]] = uang;
  }

  let sisaUang = Object.values(obj);

  for (let i = 0; i < sisaUang.length; i++) {
    totalTabungan += sisaUang[i];
  }

  obj["TotalTabungan"] = totalTabungan;

  return obj;
}

var hargaMakanan = [
  {
    nama: "ayam",
    harga: 5000,
  },
  {
    nama: "nasi",
    harga: 2000,
  },
  {
    nama: "cola",
    harga: 1000,
  },
  {
    nama: "chiki",
    harga: 1500,
  },
  {
    nama: "hotdog",
    harga: 3000,
  },
  {
    nama: "aqua",
    harga: 2000,
  },
];

var historyPembelian = `Senin-ayam,nasi,cola.Selasa-chiki,hotdog.Rabu-ayam,chiki.Kamis-hotdog.Jumat-chiki,cola,nasi`;
console.log(jumlahTabungan(hargaMakanan, historyPembelian));
