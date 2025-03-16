export enum LoginFieldNames {
	email = 'email',
	password = 'password',
}

export type LoginFields = {
    email: string;
    password: string;
};

export enum SignUpFieldNames {
	email = 'email',
	password = 'password',
    displayName = 'displayName'
}

export type SignUpFields = {
    email: string;
    password: string;
    displayName: string;
};

export enum authErrors {
    invalidCredentials = 'auth/invalid-credential',
    emailInUse = 'auth/email-already-in-use'
}
