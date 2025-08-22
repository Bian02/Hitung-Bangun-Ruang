document.getElementById("segitiga").addEventListener("click", () => {
    const segitiga = 
        `<p class="pertanyaan">Mencari Panjang Sisi Miring "ac"</p>
        <section class="tinggi">
            <p id="a">a</p>
            <input type="number" name="Tinggi" id="inputTinggi" required />
            <p id="pesan"></p>
            <section class="bangunRuang">
                <svg height="300px" width="400px" class="segiTigaSiku-Siku">
                    <path fill="lightgray" stroke="black"
                    d="M 0,20 L 0,240 L 400,240 L 0,20"/>
                </svg>
                <p id="tandaTanya">?</p>
                <p id="b">b</p>
                <p id="c">c</p>
            <input type="number" name="Alas" id="inputAlas" required/>
        </section>
        <button type="submit" id="tombol">Submit</button>`
    document.querySelector(".isi").innerHTML = segitiga;
});


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
    const kalimat8 = `<p>c = √${a**2 + b**2}</p>`;
    const kalimat9 = `<p>c = ${c}</p>`;
    const kalimat10 = `<p>Jadi, panjang sisi miring "ac" adalah ${c}</p>`
    const hasil = kalimat1 + kalimat2 + kalimat3 + kalimat4 + kalimat5 + kalimat6 + kalimat7 + kalimat8 + kalimat9 + kalimat10;

    jawab.innerHTML = hasil;
});
