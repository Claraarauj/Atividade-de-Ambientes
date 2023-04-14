const movies = [
    {
      titulo: 'Harry Potter',
      classificacao: 3.5,
      hasWatched: true
    },
    {
      titulo: 'Senhor dos aneis',
      classificacao: 5,
      hasWatched: true,
    },
    {
      titulo: 'Star Wars',
      classificacao: 5,
      hasWatched: true,
    },
  
    {
      titulo: 'Mad Max',
      classificacao: 0,
      hasWatched: false,
    },
  ]
  
  for (let i = 0; i < movies.length; i++) {
      if (movies[i].hasWatched) {
        console.log(`Você assistiu "${movies[i].titulo}" - ${movies[i].classificacao} estrelas`);
      } else {
        console.log(`Você não assistiu "${movies[i].titulo}" - ${movies[i].classificacao} estrelas`);
  
      }
  }