export type TRegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export type TLoginForm = Omit<TRegisterForm, 'name' | 'password_confirmation'>;

export type TLoginStatus = {
    message: string;
    isSuccess: boolean;
};
