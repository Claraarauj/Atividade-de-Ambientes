function mostFreqChar(string) {
    let ocorrencias = {};
    let maxOcorrencias = 0;
    let mostFreqChar = '';
  
    for (let i = 0; i < string.length; i++) {
      let caractere = string[i];
      ocorrencias[caractere] = (ocorrencias[caractere] || 0) + 1;
      if (ocorrencias[caractere] > maxOcorrencias) {
        maxOcorrencias = ocorrencias[caractere];
        mostFreqChar = caractere;
      }
    }
  
    return mostFreqChar;
  }

  console.log(mostFreqChar('HELLO')); 
console.log(mostFreqChar('abbbcc')); 
console.log(mostFreqChar('www.dog.com'));  