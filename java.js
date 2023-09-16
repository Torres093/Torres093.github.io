const billetesSeleccionados = [];

document.getElementById("nombre").addEventListener("input", function () {
    const nombreUsuario = document.getElementById("nombre").value;
    document.getElementById("mensajeSaludo").textContent = `Bienvenido ${nombreUsuario}, tu retiro se realizo correctamente:`;
});

function agregarBillete() {
    const billeteSeleccionado = parseInt(document.getElementById("billete").value);
    billetesSeleccionados.push(billeteSeleccionado);
    actualizarResultados();
}

function calcularBilletes() {
    const billeteSeleccionado = parseInt(document.getElementById("billete").value);
    billetesSeleccionados.push(billeteSeleccionado);
    actualizarResultados();
}

function actualizarResultados() {
    const billetes100 = billetesSeleccionados.filter(d => d === 100).length;
    const billetes50 = billetesSeleccionados.filter(d => d === 50).length;
    const billetes20 = billetesSeleccionados.filter(d => d === 20).length;
    const billetes10 = billetesSeleccionados.filter(d => d === 10).length;
    const billetes5 = billetesSeleccionados.filter(d => d === 5).length;
    const billetes1 = billetesSeleccionados.filter(d => d === 1).length;

    document.getElementById("billetes100").textContent = billetes100;
    document.getElementById("billetes50").textContent = billetes50;
    document.getElementById("billetes20").textContent = billetes20;
    document.getElementById("billetes10").textContent = billetes10;
    document.getElementById("billetes5").textContent = billetes5;
    document.getElementById("billetes1").textContent = billetes1;
}