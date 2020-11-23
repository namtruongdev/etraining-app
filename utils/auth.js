import { verify } from 'jsonwebtoken';

export const auth = (next) => async (req, res) => {
  verify(req.cookies.auth, process.env.SECRET, async (err, decoded) => {
    if (!err && decoded) {
      return await next(req, res, decoded);
    }
    res.status(401).json({
      code: 401,
      messange: 'Bạn chưa đăng nhập!',
    });
  });
};
