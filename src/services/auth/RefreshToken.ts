import RefreshToken from "../../models/auth/RefreshToken"
import User from "../../models/users/User"
import { randomUUID } from "crypto"

class RefreshTokenService {
    private user: User

    constructor(user: User) {
        this.user = user
    }

    generateRefreshToken = async () : Promise<string> => {
        const token = randomUUID()

        const userId = this.user.id

        await RefreshToken.create({ token, userId })

        return token
    }

    isRefreshTokenExpired = async (token: string) : Promise<boolean> => {
        const refreshToken = await RefreshToken.findOne({ where: { token } })

        if (refreshToken) {
            const tokenData = refreshToken.toJSON()

            const currentDate = new Date()
            const timeDelta = tokenData.created_at.getTime() - currentDate.getTime()

            if (timeDelta < 60000) {
                return true
            }

            return false
        }

        return false
    }
}

export default RefreshTokenService
