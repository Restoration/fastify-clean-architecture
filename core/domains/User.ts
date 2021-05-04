class User {
    constructor(
      private readonly _id: number,
      private readonly _name: string,
      private readonly _email: string,
      private readonly _password: string,
      private readonly _createdAt: string,
      private readonly _updatedAt: string,
    ) {}
  }
  export default User;