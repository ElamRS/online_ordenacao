function ordenar() {
    let lista = document.getElementById('lista').value;
    alert(Math.floor(lista.length/2))
}

function checarInput(l) {
    let espaco, virgula=0;
    // Se a lista for passada da forma como foi prevista, ela terá um tamanho ímpar
    if ((l.length%2)==1) {
        for (i=0; i<l.length; ++i) {
            if (l[i]==' ') {espaco++;}
            else if(l[i]==',') {virgula++;}
        }
    } else {
        return false;
    }
    // O número de vírgula ou de espaços será sempre (l.length/2 - 1)
    if (espaco==(Math.floor(l.length/2)) || virgula==(Math.floor(l.length/2))) {
        return true;
    }
}

function quickSort() {

}