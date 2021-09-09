function encryptAndShowData(){
    //Obteniendo la frase a encriptar
    let valor = document.getElementById("wordToEncrypt").value;
    //Encryptando valor con DES utilizando CryptoJS
    var valorEncriptado = CryptoJS.DES.encrypt(valor, "Fierce Deity"); 
    //Obteniendo el input result
    var resultado = document.getElementById("resultInput");
    //Asignando la frase encriptada al input result
    resultado.value = valorEncriptado.toString();
}

function decryptAndShowData(){
    //Obteniendo la frase a encriptar
    let valor = document.getElementById("wordToDecrypt").value;
    //Encryptando valor con DES utilizando CryptoJS
    var valorDesencriptado = CryptoJS.DES.decrypt(valor, "Fierce Deity"); 
    //Obteniendo el input result2
    var resultado2 = document.getElementById("resultInput2");
    //Asignando la frase encriptada al input result2
    resultado2.value = valorDesencriptado.toString(CryptoJS.enc.Utf8);
}