





function camelize(str) {
  return str
    .split('-') // 1. Corta em ['background', 'color']
    .map((palavra, index) => {
      // 2. Se for a primeira palavra (índice 0), não fazemos nada, retornamos ela igual
      if (index === 0) return palavra;
      
      // 3. Se não for a primeira, pegamos na primeira letra [0], 
      // fazemos maiúscula, e colamos o resto da palavra (.slice(1))
      return palavra[0].toUpperCase() + palavra.slice(1);
    })
    .join(''); // 4. Juntamos tudo sem espaço
}

// console.log(camelize("background-color")); // Deve dar backgroundColor
// console.log(camelize("list-style-image")); // Deve dar listStyleImage
// console.log(camelize("-webkit-transition")); // Deve dar WebkitTransition