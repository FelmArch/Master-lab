





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


// Filtro

function filterRange(arr, a, b) {
  // Retorna apenas os itens que estão entre a e b (inclusive)
  return arr.filter(item => item >= a && item <= b);
}

// Teste:
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log(filtered); // [3, 1]
console.log(arr);      // [5, 3, 8, 1] (Original intocado)

// faixa de filtro
function filterRangeInPlace(arr, a, b) {
  // Percorremos o array do fim para o início (i = arr.length - 1 até 0)
  for (let i = arr.length - 1; i >= 0; i--) {
    let valor = arr[i];

    // Se o valor estiver fora da faixa (menor que a ou maior que b), removemos
    if (valor < a || valor > b) {
      arr.splice(i, 1); // Remove 1 elemento na posição i
    }
  }
}

// Teste:
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr); // [3, 1]