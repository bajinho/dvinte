import jwt from 'jsonwebtoken'
import User from '../models/User'
// import Character from '../models/Character'
import authConfig from '../../config/auth'

class SessionController {
  async store(req, res) {
    const { email, password } = req.body

    const user = await User.findOne({
      where: { email },
    })

    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado!' })
    }
    if (user && !(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'A senha está incorreta!' })
    }

    const { id, name, is_gm } = user

    return res.json({
      user: {
        id,
        name,
        email,
        is_gm,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    })
  }
}

export default new SessionController()
