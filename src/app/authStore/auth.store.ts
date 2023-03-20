export interface Auth {
  user: User | null;
  token: string;
  sucess: boolean;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
}

export const initialState: Auth | null = {
  user: null,
  token: '',
  sucess: false,
};

export interface UserRegistration {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
