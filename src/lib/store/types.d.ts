import { Result, ok, err } from 'neverthrow';

import { Result, ok, err } from 'neverthrow';

/**
 * Represents a generic store interface for key-value storage operations.
 * This interface provides methods for setting, retrieving, and saving data.
 */
export interface Store {
  /**
   * Sets a value associated with a specific key in the store.
   *
   * @param key - The key under which the value will be stored.
   * @param value - The value to store. Can be of any type.
   * @returns A `Promise` that resolves to a `Result` object.
   */
  set(key: string, value: any): Promise<Result<void, Error>>;

  /**
   * Retrieves a value associated with a specific key from the store.
   *
   * @param key - The key for which to retrieve the value.
   * @returns A `Promise` that resolves to a `Result` object.
   *          The `Result` contains the retrieved value of type `T` or `null` if the key does not exist,
   *          or an `Error` on failure.
   */
  get<T>(key: string): Promise<Result<T | null, Error>>;

  /**
   * Saves the current state of the store.
   *
   * @returns A `Promise` that resolves to a `Result` object.
   */
  save(): Promise<Result<void, Error>>;

  /**
   * Initialise the (DB) backend
   */
  init(): Promise<void>;

  exportToJson(): Promise<Result<string, Error>>;
}
