function sumArray(array) {
    let soma = 0;
  
      for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    console.log(soma);
  }
  sumArray([1,2,3]); 
  sumArray([10,3,10,4]); 
  sumArray([-5,100]); 