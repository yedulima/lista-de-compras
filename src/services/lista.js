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

export function excluirItem(id) {
	const indice = itens.findIndex((item) => item.id === id);

	if (indice !== -1) {
		itens.splice(indice, 1);
	}
}

export function listarItens() {
	return [...itens];
}

export function numeroItens() {
	return itens.length;
}
