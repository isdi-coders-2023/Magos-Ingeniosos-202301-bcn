import {
  SetIsLoadingAction,
  UiActionType,
  UnsetIsLoadingAction,
} from "./types";

export const setIsLoadingActionCreator = (): SetIsLoadingAction => ({
  type: UiActionType.setIsLoading,
});

export const UnsetIsLoadingActionCreator = (): UnsetIsLoadingAction => ({
  type: UiActionType.unsetIsLoading,
});
