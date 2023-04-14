function isUniform(array) {
    let valorConsulta = array[0];
  
    for (let i = 0; i < array.length; i++) {
  
      if (valorConsulta != array[i]) {
        return false;
      }
  
    }
     return true
  
  
  }
  console.log(isUniform([4,4,4,4]));