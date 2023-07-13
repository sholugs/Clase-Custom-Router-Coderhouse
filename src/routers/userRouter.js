import MyRouter from "./myRouter.js"
import jwt from 'jsonwebtoken'

export default class UserRouter extends MyRouter {
    init() {
        this.post('/login', ['PUBLIC'], (req, res) => {
            const user = {
                email: req.body.email,
                role: 'user'
            }
            const token = jwt.sign(user, 'secret')
            res.sendSuccess({token})
        })

        this.get('/current', ['USER', 'ADMIN', 'PUBLIC'], (req, res) => {
            res.sendSuccess(req.user)
        })
    }
}