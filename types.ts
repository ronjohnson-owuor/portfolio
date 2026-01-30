export type email_payload = {
	sender: string;
	message: string;
};

export type email_response = {
	message: string;
	proceed: boolean;
	error?: any;
	data?: any;
};
