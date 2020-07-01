import User from '../models/User';

class UserController {
  async create(req, res) {
    const checkUser = await User.findOne({ where: { email: req.body.email } });

    if (checkUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });

    return res.json({
      user,
    });
  }
}

export default new UserController();
