export interface IButtonTypes {
	children: string;
	// Used to cover for polymorphic props since there is no automatic type inference yet
	[any: string]: any;
}
