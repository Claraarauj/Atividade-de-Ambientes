function max(array) {
    let max = array[0]
    for (let i = 0; i < array.length; i++) {
      if (max < array[i]) {
        max = array[i]
  
      }
    }
    console.log(max);
  }
  max([1,2,3]); 
  max([10,3,10,4]); 
  max([-5,100]); 