function CalcularValorMensal(plano, modalidade) {
  let conta = 0;
  if (plano === "Trimestral") {
    switch (modalidade) {
      case "Musculação":
        conta = 90 / 0.1;
        break;
      case "Funcional":
        conta = 120 / 0.1;
        break;
      case "Dança":
        conta = 100 / 0.1;

      default:
        break;
    }
  } else if (plano === "Semestral") {
    switch (modalidade) {
      case "Musculação":
        conta = 90 * 0.15;
        break;
      case "Funcional":
        conta = 120 * 0.15;
        break;
      case "Dança":
        conta = 100 * 0.15;
        break;

      default:
        break;
    }
  }
}
export default CalcularValorMensal
