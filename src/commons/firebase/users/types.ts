import { ProductionInput } from "../production-inputs/types";

export interface UserData {
  email: string;
  name: string;
  cpf: string;
  phone: string;
}

export interface User extends UserData {
  id: string;
  productionInput?: ProductionInput;
}
