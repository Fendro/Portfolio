export interface IBaseEntity<T> {
  id: number;
}

export abstract class BaseEntity<T> implements IBaseEntity<T> {
  protected constructor(private _id: number) {}

  get id() {
    return this._id;
  }
}
