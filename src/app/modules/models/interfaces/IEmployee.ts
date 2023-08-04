export interface EmployeeModel {
	id: number;
	name: string;
	cpf: string;
	cpfSituation: string;
	accountSituation: AccountSituation[];
}

export interface AccountSituation {
	accountType: string;
	numberAccount: string;
	cooperativeName: string;
}





