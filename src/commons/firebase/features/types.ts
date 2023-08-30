import { Release } from "~/commons/storage/release/types";

export type Feature = {
  [Key in keyof typeof Release]: boolean;
}
