import { Release } from "~/commons/storage/release/types";

export type Step = {
  [Key in keyof typeof Release]: boolean;
}
