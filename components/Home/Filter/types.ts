export interface IFilter {
	data: Array<IPortfolioItem>;
	onFilter: any;
}

interface IPortfolioItem {
	id: number;
	title: string;
	subtitle: string;
	imgUrl: string;
	linkUrl: string;
	tags: Array<string>;
}
