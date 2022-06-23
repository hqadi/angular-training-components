export interface EditAccountBody {
	clientName: string;
	description: string;
	legalEntity: string;
}

export interface Account extends EditAccountBody {
	id: number;
}