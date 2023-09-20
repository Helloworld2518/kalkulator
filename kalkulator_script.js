function akhir() {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);
  const operator = document.getElementById("Operator").value;

  if (isNaN(angka1) || isNaN(angka2)) {
    alert("masukkan angka yang benar!");
  }

  if (angka2 === 0 && operator === "bg") {
    alert("tidak bisa dibagi dengan 0");
  }

  if (operator === "+") {
    document.getElementById("hasil").value = angka1 + angka2;
  }
  if (operator === "-") {
    document.getElementById("hasil").value = angka1 - angka2;
  }
  if (operator === "*") {
    document.getElementById("hasil").value = angka1 * angka2;
  }
  if (operator === "bg") {
    document.getElementById("hasil").value = angka1 / angka2;
  }
  if (operator === "pgt") {
    document.getElementById("hasil").value = angka1 ** angka2;
  }
  if (operator === "dvd") {
    document.getElementById("hasil").value = angka1 % angka2;
  }
}

function tgl() {
  var hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
  var bulanlist = [
    "Januari",
    "February",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  var h = new Date();
  var date = h.getDate();
  var day = h.getDay();
  if (day == 0) {
    day = day + 6;
  } else {
    day = day - 1;
  }
  var bulan = h.getMonth();
  var bln = bulanlist[bulan];
  var jam = h.getHours();
  var kosong = " ";
  var fixed_date =
    hari[day] + "," + kosong + date + kosong + bln + kosong + h.getFullYear();
  var fxd = document.getElementById("tanggal");
  var fxt = document.getElementById("jam");
  fxd.innerHTML = fixed_date;
  fxt.innerHTML = jam + "." + h.getMinutes() + "." + h.getSeconds();
}
tgl();
