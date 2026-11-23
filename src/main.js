import "./style.css";
import { criarItemLista } from "./components/listaItem.js";
import { adicionarItem } from "./services/lista.js";

const inputItem = document.getElementById("input-item");
const botaoAdicionar = document.getElementById("adicionar-item");
const listaCompras = document.getElementById("lista-de-compras");

botaoAdicionar.addEventListener("click", () => {
	if (inputItem.value === "") {
		alert("O campo nome não pode estar vazio!!!");
		return;
	}

	const novoItem = adicionarItem(inputItem.value);
	listaCompras.appendChild(criarItemLista(novoItem));

	inputItem.value = "";
});
