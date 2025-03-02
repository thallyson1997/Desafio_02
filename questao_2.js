const senhaCorreta = '23101997';
let tentativa;
let tentativasRestantes = 3;

do {
    tentativa = prompt("Digite a senha:");
    
    if (tentativa === senhaCorreta) {
        alert("Acesso concedido!");
        break;
    } else {
        tentativasRestantes--;
        if (tentativasRestantes > 0) {
            alert(`Senha incorreta! Você tem ${tentativasRestantes} tentativas restantes.`);
        } else {
            alert("Senha bloqueada!");
        }
    }
} while (tentativasRestantes > 0);
