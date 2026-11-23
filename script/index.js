const inputItem = document.getElementById("input-item");
const botaoAdicionar = document.getElementById("adicionar-item");
const listaCompras = document.getElementById("lista-de-compras");

let contador = 0;

botaoAdicionar.addEventListener("click", (evento) => {
	if (inputItem.value === "") {
		alert("O campo nome não pode estar vazio!!!");
		return;
	}
	//criando os elementos HTML para definir um item da lista de compras
	const itemLista = document.createElement("li");
	const conteinerItemLista = document.createElement("div");
	//definindo uma classe css para um elemento html criado
	conteinerItemLista.classList.add("lista-item-container");
	const inputCheckbox = document.createElement("input");
	//alterando os atributos type e id do elemento input
	inputCheckbox.type = "checkbox";
	inputCheckbox.id = "checkbox-" + contador++;
	const nomeItem = document.createElement("p");
	//atribuindo um texto ao elemento parágrafo
	nomeItem.innerText = inputItem.value;

	const data = new Date(); //criando um objeto data

	const diaSemana = data.toLocaleDateString("pt-BR", { weekday: "long" });
	const dia = data.toLocaleDateString("pt-BR");
	const hora = data.toLocaleTimeString("pt-BR", {
		hour: "2-digit",
		minute: "2-digit",
	});
	const textoData = `${diaSemana} (${dia}) às ${hora}`;
	const paragrafoData = document.createElement("p");
	paragrafoData.classList.add("texto-data");
	paragrafoData.innerText = textoData;

	//adicionar os elementos filhos na árvore do DOM
	conteinerItemLista.appendChild(inputCheckbox);
	conteinerItemLista.appendChild(nomeItem);
	itemLista.appendChild(conteinerItemLista);
	itemLista.appendChild(paragrafoData);
	listaCompras.appendChild(itemLista);

	inputItem.value = "";
});
