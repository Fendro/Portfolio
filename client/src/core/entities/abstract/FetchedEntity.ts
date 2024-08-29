export type IdentifiableEntity = { id: number };

export type Entity = Record<string, any>;

export type GetPayload<T extends Record<string, any>> = T;

export type PatchPayload<T extends Record<string, any>> = Partial<T>;

export type PostPayload<T extends Record<string, any>> = T;

export type PutPayload<T extends Record<string, any>> = T;

export interface IFetchedEntity<T extends Record<string, any>> {
  dataToPatch: (modified: T) => PatchPayload<T>;
  dataToPut: () => PutPayload<T>;
}

export abstract class FetchedEntity<T extends Record<string, any>>
  implements IFetchedEntity<T>
{
  protected constructor(private _id: number) {}

  get id() {
    return this._id;
  }

  get data() {
    return this._data;
  }

  dataToPatch(modifiedObject: T) {
    if (modifiedObject === undefined || modifiedObject === null)
      throw new ReferenceError();

    const keys = Object.keys(modifiedObject) as (keyof T)[];

    const differences: PatchPayload<T> = {};

    keys.forEach((key) => {
      if (
        Object.prototype.hasOwnProperty.call(this, key) &&
        this._data[key] !== modifiedObject[key]
      ) {
        differences[key] = modifiedObject[key];
      }
    });

    return differences;
  }

  dataToPut() {
    return this._data;
  }
}
