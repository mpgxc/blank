import { UUID, randomUUID } from 'node:crypto';

export type Entity<T = unknown> = {
  id: UUID;
  createdAt: Date;
  updatedAt: Date;
} & T;

export const entityFactory = <T>(
  props: Omit<T, 'id' | 'updatedAt' | 'createdAt'>,
): Entity<T> => ({
  id: randomUUID(),
  ...(props as T),
  createdAt: new Date(),
  updatedAt: new Date(),
});

export type Optional<T> = T | null | undefined;

export type OptionalPromise<T> = Promise<Optional<T>>;

export type Replace<T, R extends Partial<T>> = Omit<T, keyof R> & R;

export type Result<T, E> = Ok<T> | Err<E>;

type Ok<T> = {
  kind: 'ok';
  isOk: true;
  value: T;
};

type Err<T> = {
  kind: 'err';
  isOk: false;
  error: T;
};

const Ok = <T>(value: T): Ok<T> => ({
  kind: 'ok',
  isOk: true,
  value,
});

const Err = <T>(error: T): Err<T> => ({
  kind: 'err',
  isOk: false,
  error,
});

export const Result = {
  Ok,
  Err,
};
