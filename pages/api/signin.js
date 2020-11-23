import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import cookie from 'cookie';
import { connect } from '../../utils/database';

const signin = async (req, res) => {
  const { db } = await connect();
  if (req.method === 'POST') {
    const user = await db.collection('users').findOne({
      username: req.body.username,
    });

    if (user !== null) {
      const match = await compare(req.body.password, user.password);
      if (match) {
        const claims = { sub: user._id, name: user.name };
        const jwt = sign(claims, process.env.SECRET, { expiresIn: '1h' });
        res.setHeader(
          'Set-Cookie',
          cookie.serialize('auth', jwt, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: 3600,
            path: '/',
          })
        );
        return res.status(200).json({
          code: 200,
          message: 'Đăng nhập thành công!',
        });
      } else {
        return res.status(401).json({
          code: 401,
          message: 'Sai Tên người dùng hoặc Mật khẩu!',
        });
      }
    } else {
      return res.status(500).json({
        code: 500,
        message: 'Người dùng không tồn tại!',
      });
    }
  } else return res.redirect(301, '/');
};

export default signin;
