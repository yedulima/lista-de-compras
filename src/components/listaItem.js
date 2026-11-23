import { excluirItem } from "../services/lista.js";
import { formatarData } from "../utils";

export function criarItemLista(item) {
	const itemLista = document.createElement("li");
	itemLista.classList.add("lista-container");

	const conteudoItem = document.createElement("div");

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

	const botaoExcluir = document.createElement("button");
	botaoExcluir.classList.add("button-excluir-item");
	botaoExcluir.addEventListener("click", () => {
		excluirItem(item.id);
		itemLista.remove();
	});

	const iconeExcluir = document.createElement("span");
	iconeExcluir.classList.add("mdi", "mdi-trash-can-outline", "mdi-24px");
	iconeExcluir.style.color = "red";

	botaoExcluir.appendChild(iconeExcluir);

	conteinerItemLista.appendChild(inputCheckbox);
	conteinerItemLista.appendChild(nomeItem);
	conteudoItem.appendChild(conteinerItemLista);
	conteudoItem.appendChild(paragrafoData);
	itemLista.appendChild(conteudoItem);
	itemLista.appendChild(botaoExcluir);

	return itemLista;
}
