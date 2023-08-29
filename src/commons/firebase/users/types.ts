export interface UserData {
  email: string;
  name: string;
  cpf: string;
  phone: string;
}

export interface User extends UserData {
  id: string;
}
