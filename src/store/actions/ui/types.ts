export enum UiActionType {
  isLoading,
}

export interface UiAction {
  type: UiActionType;
  payload?: unknown;
}
