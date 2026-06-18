const resultado = document.getElementById("resultado");
const historico = document.getElementById("historico");
const botoes = document.querySelectorAll(".btn");

let valorAtual = "0";
let operador = null;
let valorAnterior = "";
let calculou = false;

function atualizarDisplay() {
    resultado.textContent = valorAtual;
}

function adicionarNumero(numero) {
    if (calculou) {
        valorAtual = "";
        calculou = false;
    }

    if (numero === "." && valorAtual.includes(".")) return;

    if (valorAtual === "0" && numero !== ".") {
        valorAtual = numero;
    } else {
        valorAtual += numero;
    }
    atualizarDisplay();
}

function definirOperador(op) {
    if (operador !== null && !calculou) {
        calcular();
    }
    operador = op;
    valorAnterior = valorAtual;
    historico.textContent = `${valorAnterior} ${op}`;
    valorAtual = "";
    atualizarDisplay();
}

function contaAdicao(a, b) {
    return a + b;
}

function contaSubtracao(a, b) {
    return a - b;
}

function contaMultiplicacao(a, b) {
    return a * b;
}

function contaDivisao(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero!";
    }
    return a / b;
}

function contaPorcentagem(total, porcentagem) {
    return (total * porcentagem) / 100;
}

function calcular() {
    if (operador === null || valorAnterior === "") return;

    const anterior = parseFloat(valorAnterior);
    const atual = parseFloat(valorAtual);
    let resultadoCalc;

    switch (operador) {
        case "+":
            resultadoCalc = contaAdicao(anterior, atual);
            break;
        case "-":
            resultadoCalc = contaSubtracao(anterior, atual);
            break;
        case "*":
            resultadoCalc = contaMultiplicacao(anterior, atual);
            break;
        case "/":
            resultadoCalc = contaDivisao(anterior, atual);
            break;
        case "%":
            resultadoCalc = contaPorcentagem(anterior, atual);
            break;
        default:
            return;
    }

    historico.textContent = `${valorAnterior} ${operador} ${valorAtual} =`;

    if (typeof resultadoCalc === "string") {
        valorAtual = resultadoCalc;
    } else {
        valorAtual = parseFloat(resultadoCalc.toFixed(10)).toString();
    }

    operador = null;
    valorAnterior = "";
    calculou = true;
    atualizarDisplay();
}

function limpar() {
    valorAtual = "0";
    operador = null;
    valorAnterior = "";
    historico.textContent = "";
    calculou = false;
    atualizarDisplay();
}

function apagar() {
    if (calculou) {
        limpar();
        return;
    }
    valorAtual = valorAtual.slice(0, -1);
    if (valorAtual === "" || valorAtual === "-") {
        valorAtual = "0";
    }
    atualizarDisplay();
}

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        const numero = botao.dataset.numero;
        const operadorBtn = botao.dataset.operador;
        const acao = botao.dataset.acao;

        if (numero !== undefined) {
            adicionarNumero(numero);
        } else if (operadorBtn) {
            definirOperador(operadorBtn);
        } else if (acao === "calcular") {
            calcular();
        } else if (acao === "limpar") {
            limpar();
        } else if (acao === "backspace") {
            apagar();
        }
    });
});

document.addEventListener("keydown", (e) => {
    if (e.key >= "0" && e.key <= "9" || e.key === ".") {
        adicionarNumero(e.key);
    } else if (["+", "-", "*", "/"].includes(e.key)) {
        definirOperador(e.key);
    } else if (e.key === "%") {
        definirOperador("%");
    } else if (e.key === "Enter" || e.key === "=") {
        calcular();
    } else if (e.key === "Escape") {
        limpar();
    } else if (e.key === "Backspace") {
        apagar();
    }
});
