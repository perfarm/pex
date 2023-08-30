import { Machine } from "../machines/types";
import { ProductionInput } from "../production-inputs/types";
import { Production } from "../productions/types";

export interface UserData {
  email: string;
  name: string;
  cpf: string;
  phone: string;
}

export interface User extends UserData {
  id: string;
  productionInput?: ProductionInput;
  machine?: Machine;
  production?: Production;
}
