import passport from 'passport'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import UserService from '../services/users/User'

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret',
    issuer: 'accounts.examplesoft.com',
    audience: 'yoursite.net'
}

passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
    const userService = new UserService()

    try {
        const user = await userService.getById(jwt_payload.sub)

        done(null, user)
    } catch (e) {

        done(e, false)
    }
}))

export { opts as jwtOptions }

export default passport
