import { hash } from 'bcrypt';
import { connect } from '../../utils/database';

const signup = async (req, res) => {
  const { db } = await connect();

  if (req.method === 'POST') {
    const username = req.body.username.toLowerCase();
    const email = req.body.email.toLowerCase();
    const checkUser = await db.collection('users').findOne({
      $or: [{ username: username }, { email: email }],
    });

    if (checkUser === null) {
      const hashPassword = await hash(req.body.password, 12);

      const response = await db.collection('users').insertOne({
        name: req.body.name,
        username: username,
        password: hashPassword,
        email: email,
      });

      if (response.result.ok === 1) {
        return res.status(200).json({
          code: '200',
          message: 'Đăng ký thành công!',
        });
      } else
        return res.status(500).json({
          code: '500',
          message: 'Đăng ký thất bại!',
        });
    } else {
      return res.status(500).json({
        code: '500',
        message: 'Tên người dùng hoặc Email đã tồn tại!',
      });
    }
  } else return res.redirect(301, '/');
};

export default signup;
