function jawaban() {
    const a = document.getElementById("inputTinggi").value;
    const b = document.getElementById("inputAlas").value;
    let c = (a**2) + (b**2);
    c = Math.sqrt(c);

    document.writeln(`<p>Rumus Teorema Pythagoras ialah: c² = a² + b²</p>`);
    document.writeln(`<p>Diketahui:</p>`);
    document.writeln(`<p>a = ${a}</p>`);
    document.writeln(`<p>b = ${b}</p>`);
    document.writeln(`<p>Jawab:</p>`);
    document.writeln(`<p>c² = ${a}² + ${b}²</p>`);
    document.writeln(`<p>c² = ${a**2} + ${b**2}</p>`);
    document.writeln(`<p>c² = ${a**2 + b**2}</p>`);
    document.writeln(`<p>c = √${a**2 + b**2}</p>`);
    document.writeln(`<p>c = ${c}</p>`);
    document.writeln(`<p>Jadi jawabannya adalah ${c}</p>`)
}