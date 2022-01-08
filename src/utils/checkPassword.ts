import hashPassword from "./hashPassword"
import User from "../models/users/User"

export default (user: User | null, password: string) => hashPassword(password) === user?.password
