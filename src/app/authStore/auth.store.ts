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

export const initialState: Auth = {
  user: null,
  token: '',
  sucess: false,
};
