document.getElementById("jawaban").addEventListener("click", () => {
    const a = document.getElementById("inputTinggi").value;
    const b = document.getElementById("inputAlas").value;
    let c = (a**2) + (b**2);
    c = Math.sqrt(c);
});