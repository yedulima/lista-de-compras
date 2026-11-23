const itens = [];
let contador = 0;

export function adicionarItem(nome) {
	const item = {
		id: contador++,
		nome,
		data: new Date(),
	};

	itens.push(item);
	return item;
}

export function listarItens() {
	return [...itens];
}
