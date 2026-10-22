// 1. Deklarasi variabel
const nama = "Reykhan";
const nim = "05301425110";
let semester = 3;
const aktif = true;
const hobi = ["Menonton", "Tidur"];

// 2. Output ke Console
console.log("Nama:", nama);
console.log("Tipe data semester:", typeof semester);
console.log("Tipe data aktif:", typeof aktif);
console.log("Hobi pertama:", hobi[0]);

// 3. Output ke halaman
document.getElementById("nama").textContent = nama;
document.getElementById("detail").innerHTML = `
    NIM: ${nim}<br>
    Semester: ${semester}<br>
    Status: ${aktif ? "Aktif" : "Cuti"}<br>
    Hobi: ${hobi.join(", ")}
`;