export interface IRoutes {
	name: string;
	path: string;
	label: string;
}

export const routes: Array<IRoutes> = [
	{
		name: "home",
		path: "/",
		label: "Inicio",
	},
	{
		name: "about",
		path: "/about",
		label: "Acerca",
	},
	// {
	// 	name: "contact",
	// 	path: "/contact",
	// 	label: "Contacto",
	// },
];
