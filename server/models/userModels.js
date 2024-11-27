class UserModel {
  constructor(user) {
    this.name = user.name || "";
    this.email = user.email || "";
    this.phone = user.phone || "";
    this.password = user.password || "";
    this.gender = user.gender || ""
  }
}
export default UserModel;
