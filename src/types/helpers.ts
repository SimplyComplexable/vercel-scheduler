export type StateSetterCallback<State> = (currValue: State) => State;
export type StateSetterFunction<State> = (newValue: State | StateSetterCallback<State>) => void;
export type ValueOf<T> = T[keyof T];
