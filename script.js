//Tambah
const tambah = document.getElementById("tambah");
tambah.addEventListener("click", function () {
  let angka1 = parseInt(document.getElementById("angka1").value);
  let angka2 = parseInt(document.getElementById("angka2").value);
  document.getElementById("hasil").innerHTML = angka1 + angka2;
});

//Kurang
const kurang = document.getElementById("kurang");
kurang.addEventListener("click", function () {
  let angka1 = parseInt(document.getElementById("angka1").value);
  let angka2 = parseInt(document.getElementById("angka2").value);
  document.getElementById("hasil").innerHTML = angka1 - angka2;
});

//Kali
const kali = document.getElementById("kali");
kali.addEventListener("click", function () {
  let angka1 = parseInt(document.getElementById("angka1").value);
  let angka2 = parseInt(document.getElementById("angka2").value);
  document.getElementById("hasil").innerHTML = angka1 * angka2;
});

//Bagi
const bagi = document.getElementById("bagi");
bagi.addEventListener("click", function () {
  let angka1 = parseInt(document.getElementById("angka1").value);
  let angka2 = parseInt(document.getElementById("angka2").value);
  document.getElementById("hasil").innerHTML = angka1 / angka2;
});
