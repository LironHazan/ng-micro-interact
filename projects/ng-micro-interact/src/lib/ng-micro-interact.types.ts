export type ClassRef = new (...args: any[]) => any;

export interface InteractionType {
  [key: string]: ClassRef;
}
