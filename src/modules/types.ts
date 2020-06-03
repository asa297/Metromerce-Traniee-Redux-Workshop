export type ActionType<T extends (...args: any) => any> = Partial<ReturnType<T>>
