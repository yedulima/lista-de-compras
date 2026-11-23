import { formatarData } from "../utils";

export function criarItemLista(item) {
	const itemLista = document.createElement("li");
	const conteinerItemLista = document.createElement("div");
	conteinerItemLista.classList.add("lista-item-container");

	const nomeItem = document.createElement("p");
	nomeItem.innerText = item.nome;

	const inputCheckbox = document.createElement("input");
	inputCheckbox.type = "checkbox";
	inputCheckbox.id = "checkbox-" + item.id;
	inputCheckbox.addEventListener("change", (e) => {
		nomeItem.classList.toggle("lista-item-texto-marcado", e.target.checked);
	});

	const paragrafoData = document.createElement("p");
	paragrafoData.classList.add("texto-data");
	paragrafoData.innerText = formatarData(item.data);

	conteinerItemLista.appendChild(inputCheckbox);
	conteinerItemLista.appendChild(nomeItem);
	itemLista.appendChild(conteinerItemLista);
	itemLista.appendChild(paragrafoData);

	return itemLista;
}
