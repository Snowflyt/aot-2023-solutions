export type Result<T, E> = Ok<T> | Err<E>;
export interface Ok<T> {
  _tag: 'Ok';
  value: T;
}
export interface Err<E> {
  _tag: 'Err';
  error: E;
}
