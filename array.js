let produto = {
 nome: 'Bicicleta',
 preco: 2500,
 emEstoque: true
};
let inventario = [
 { nome: 'Pneu', preco: 100, emEstoque: true },
 { nome: 'Quadro', preco: 700, emEstoque: true },
 { nome: 'Manete', preco: 90, emEstoque: false }
 { nome: 'Guidão', preco: 180, emEstoque: false },
 { nome: 'Cubo', preco: 300, emEstoque: true },
 { nome: 'Suspensão dianteira', preco: 600, emEstoque: true }
 { nome: 'Suspensão traseira', preco: 600, emEstoque: true }
 { nome: 'Freio a disco', preco: 60, emEstoque: false }
 { nome: 'Corrente', preco: 30, emEstoque: true }
 { nome: 'Garfo', preco: 200, emEstoque: true }
 { nome: 'Aro', preco: 150, emEstoque: true }
 { nome: 'Pezinho', preco: 25, emEstoque: true }
 { nome: 'Protetor de corrente', preco: 30, emEstoque: false }
 { nome: 'Alavanca de Cambio', preco: 50, emEstoque: true }
 { nome: 'Pedal', preco: 70, emEstoque: true }
];
];
];
];
for (let i = 0; i < inventario.length; i++) {
if (inventario[i].emEstoque) {
console.log(inventario[i].nome + ' está em estoque.');
}
}