let copia;
function limpar_decodificador(valor) {
    let limpar = document.getElementById('decodificador');
    limpar.value = valor;
}

function zerar_decodificador() {

}
function descriptografar() {
    let texto = document.getElementById('decodificador').value;
    var textoSeparado = texto.replace(/ai/g, 'a');
    var textoSeparado = textoSeparado.replace(/enter/g, 'e');
    var textoSeparado = textoSeparado.replace(/imes/g, 'i');
    var textoSeparado = textoSeparado.replace(/ober/g, 'o');
    var textoSeparado = textoSeparado.replace(/ufat/g, 'u');
    texto = textoSeparado;

    if (texto != 'Digite seu texto' && texto != '') {
        document.getElementById('mensagem_decodificada').innerText = texto;
        copia = texto;
        console.log(texto);
    }
    limpar_decodificador('Digite seu texto');
    esconderImg();
}

function esconderImg() {
    document.getElementById('menino').style.display = 'none';
    document.getElementById('nenhumamensagem').style.display = 'none';
    document.getElementById('mensagem_decodificada').style.display = 'block';
}

function restaurarInicio() {
    document.getElementById('menino').style.display = 'block';
    document.getElementById('nenhumamensagem').style.display = 'block';
    document.getElementById('mensagem_decodificada').style.display = 'none';
}

function criptografar() {
    let texto = document.getElementById('decodificador').value;
    if (texto != 'Digite seu texto' && texto != '') {
        var textoSeparado = Array.from(texto);
        for (var i = 0; i < textoSeparado.length; i++) {
            switch (textoSeparado[i]) {
                case 'a':
                    textoSeparado[i] = 'ai';
                    break;
                case 'e':
                    textoSeparado[i] = 'enter';
                    break;
                case 'i':
                    textoSeparado[i] = 'imes';
                    break;
                case 'o':
                    textoSeparado[i] = 'ober';
                    break;
                case 'u':
                    textoSeparado[i] = 'ufat';
                    break;
                default:
                    break;
            }
        }
        texto = textoSeparado.join('');

        document.getElementById('mensagem_decodificada').innerText = texto;
        copia = texto;
        console.log(texto);
    }
    limpar_decodificador('Digite seu texto');
    esconderImg();
}


function copiar() {
    navigator.clipboard.writeText(copia);
    let limparP = document.getElementById('mensagem_decodificada');
    limparP.value = '';
    restaurarInicio();
}