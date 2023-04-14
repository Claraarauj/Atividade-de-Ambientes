function contains(array, valorPesquisa) {
    if (array.includes(valorPesquisa)) {
      console.log(true)
    } else {
      console.log(false);
    }
  }
  contains([10,15,20], 15);
  contains(["hello", "bye"], "bye"); 
  contains([10,15,20], 11); 