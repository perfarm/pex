export type OnAlert = (message: string) => void;

export interface PerfarmToast {
  onError?: OnAlert;
  onSuccess?: OnAlert;
}
