import { Result, ok, err } from 'neverthrow';

export interface Store {
  set(key: string, value: any): Promise<Result<void, Error>>;
  get<T>(key: string): Promise<Result<T | null, Error>>;
  save(): Promise<Result<void, Error>>;
}
