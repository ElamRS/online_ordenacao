function ordenar() {
    let lista = document.getElementById('lista').value;

    let ordenado = document.getElementById('ordenado');

    // Define estilos universais
    ordenado.style.fontSize = "20px";
    ordenado.style.marginTop = "1vw";

    const ord = [];

    if (checarInput(lista)) {
        const ord = [];
        for (i=0, j=0; i<lista.length; ++i) {
            if (!(lista[i]=="," || lista[i]==" ")) {
                ord[j] = lista[i];
                j++;
            }
        }
        ord.sort(function(a, b){return a - b});
        ordenado.style.color = "blue";
        ordenado.innerHTML = ord;
    } else {
        ordenado.style.color = "red";
        ordenado.innerHTML = `Formato não suportado.`;
    }
}

function checarInput(l) {
    let espaco=0;
    let virgula=0;
    // Se a lista for passada da forma como foi prevista, ela terá um tamanho ímpar
    if ((l.length%2)==1) {
        for (i=0; i<l.length; ++i) {
            if (l[i]==' ') {
                espaco++;
            } else if(l[i]==',') {
                virgula++;
            }
        }
    } else {
        return false;
    }
    // O número de vírgula ou de espaços será sempre (l.length/2 - 1)
    if (espaco==(Math.floor(l.length/2)) || virgula==(Math.floor(l.length/2))) {
        return true;
    }
}