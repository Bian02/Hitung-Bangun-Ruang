document.getElementById("tombol").addEventListener("click", () => {
    const a = document.getElementById("inputTinggi").value;
    const b = document.getElementById("inputAlas").value;
    let c = (a**2) + (b**2);
    c = Math.sqrt(c);

    const pesan = document.getElementById("pesan");
    const isi = "<p>Jawaban anda telah tersedia di bawah ^_^<p>";
    pesan.innerHTML = isi;

    const jawab = document.getElementById("hasil");
    const kalimat1 = "<p>Rumus Teorema Pytagoras adalah c² = a² + b²</p>";
    const kalimat2 = "<p>Diketahui: </p>";
    const kalimat3 = `<p>a = ${a}</p>`;
    const kalimat4 = `<p>b = ${b}</p>`;
    const kalimat5 = `<p>c² = ${a}² + ${b}²</p>`
    const kalimat6 = `<p>c² = ${a**2} + ${b**2}</p>`;
    const kalimat7 = `<p>c² = ${a**2 + b**2}</p>`;
    const kalimat8 = `<p>c = ✓${a**2 + b**2}</p>`;
    const kalimat9 = `<p>c = ${c}</p>`;
    const kalimat10 = `<p>Jadi, panjang sisi miring "ac" adalah ${c}</p>`
    const hasil = kalimat1 + kalimat2 + kalimat3 + kalimat4 + kalimat5 + kalimat6 + kalimat7 + kalimat8 + kalimat9 + kalimat10;

    jawab.innerHTML = hasil;
});
