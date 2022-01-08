import { Table, Column, Model, Unique } from 'sequelize-typescript'

@Table
class User extends Model {
    @Column
    name: string

    @Unique
    @Column
    email: string
}

export default User
