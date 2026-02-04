import type { Client } from "../domain";

export type ClientFormState =
  | { mode: "closed" }
  | { mode: "create" }
  | { mode: "edit"; client: Client };
