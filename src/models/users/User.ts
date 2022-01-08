import { Table, Column, Model } from 'sequelize-typescript'

@Table
class User extends Model {
    @Column
    name: string

    @Column
    email: string
}

export default User
