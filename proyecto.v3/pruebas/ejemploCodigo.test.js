const calcularIVA = require("./ejemploCodigo");
test("Valor devuelto para importe 100", () => {
    expect(calcularIVA(100)).toBe(21);
});
test("Valor devuelto para importe 200", () => {
    expect(calcularIVA(200)).toBe(42);
});
