// Domain
class User {
  constructor(
    private readonly _id: number,
    private readonly _name: string,
    private readonly _email: string,
    private readonly _password: string,
    private readonly _createdAt: string,
    private readonly _updatedAt: string
  ) {}

  public id() {
    return this._id;
  }

  public name() {
    return this._name;
  }

  public email() {
    return this._email;
  }

  public password() {
    return this._password;
  }

  public createdAt() {
    return this._createdAt;
  }

  public updatedAt() {
    return this._updatedAt;
  }
}
export default User;
