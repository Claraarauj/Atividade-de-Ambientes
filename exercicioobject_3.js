function charCount(str) {
    var charFrequency = {}; // Objeto para armazenar a frequência dos caracteres
    
    // Percorre cada caractere na string
    for (var i = 0; i < str.length; i++) {
      var char = str[i].toLowerCase(); // Transforma o caractere em minúsculo
      
      // Verifica se o caractere é uma letra do alfabeto
      if (/^[a-zA-Z]+$/.test(char)) {
        // Se o caractere ainda não estiver no objeto charFrequency, adiciona com valor 1
        // Caso contrário, incrementa o valor em 1
        if (charFrequency[char]) {
          charFrequency[char]++;
        } else {
          charFrequency[char] = 1;
        }
      }
    }
    
    return charFrequency;
  }
  
  // Exemplo de uso da função
  var str = "hello";
  var resultado = charCount(str);
  console.log(resultado);
  // Output:
  // {
  //   "h": 1,
  //   "e": 1,
  //   "l": 2,
  //   "o": 1
  // }