function CalcularValor(plano, modalidade) {
  let conta = 0;
  if (plano === "Trimestral") {
    switch (modalidade) {
      case "Musculação":
        conta = 90 * 3 * 0.9;
        break;
      case "Funcional":
        conta = 120 * 3 * 0.9;
        break;
      case "Dança":
        conta = 100 * 3 * 0.9;

      default:
        break;
    }
  } else if (plano === "Semestral") {
    switch (modalidade) {
      case "Musculação":
        conta = 90 * 6 * 0.85;

        break;
      case "Funcional":
        conta = 120 * 6 * 0.85;
        break;
      case "Dança":
        conta = 100 * 6 * 0.85;

      default:
        break;
    }
  } else {
    switch (modalidade) {
      case "Musculação":
        conta = 90;

        break;
      case "Funcional":
        conta = 120;

      case "Dança":
        conta = 100;

      default:
        break;
    }
  }
}

export default CalcularValor;
