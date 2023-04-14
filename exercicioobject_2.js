function prettyPrint({name, species, breed}) {
    console.log(`
      name: ${name},
      species: ${species}
      breed: ${breed}
      `)
}
prettyPrint({name: "Rusty", species: "dog",
breed: "mutt"});