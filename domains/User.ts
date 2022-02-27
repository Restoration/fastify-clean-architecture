// Domain
class User {
  constructor(
    private readonly _id: number,
    private readonly _name: string,
    private readonly _email: string,
    private readonly _password: string,
    private readonly _createdAt: string,
    private readonly _updatedAt: string,
  ) {}

  public id(): number {
    return this._id;
  }

  public name(): string {
    return this._name;
  }

  public email(): string {
    return this._email;
  }

  public password(): string {
    return this._password;
  }

  public createdAt(): string {
    return this._createdAt;
  }

  public updatedAt(): string {
    return this._updatedAt;
  }
}
export default User;
