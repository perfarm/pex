import { Release } from "~/commons/storage/release/types";
import { Machine } from "../machines/types";
import { ProductionInput } from "../production-inputs/types";
import { Production } from "../productions/types";

export interface UserData {
  email: string;
  name: string;
  cpf: string;
  phone: string;
}

type Feature = {
  [key in keyof typeof Release]?: boolean;
}

export interface User extends UserData {
  id: string;
  productionInput?: ProductionInput;
  machine?: Machine;
  production?: Production;
  feature: Feature;
}
