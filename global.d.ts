type Categoria = {
	id: number;
	nombre: string;
	activo: boolean;
};

type Media = {
	id: number;
	nombre: string;
	descripcion: string;
	imagen: string;
	trailer: string;
	generos: string[];
	episodios: number;
	temporadas: number;
	anhoPublicacion: string;
};
