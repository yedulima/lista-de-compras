export function formatarData(data) {
	const diaSemana = data.toLocaleDateString("pt-BR", { weekday: "long" });
	const dia = data.toLocaleDateString("pt-BR");
	const hora = data.toLocaleTimeString("pt-BR", {
		hour: "2-digit",
		minute: "2-digit",
	});

	return `${diaSemana} (${dia}) às ${hora}`;
}
