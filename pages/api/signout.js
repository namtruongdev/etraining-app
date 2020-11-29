import cookie from 'cookie';

export default async (req, res) => {
  if (req.method === 'POST') {
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('auth', '', {
        maxAge: -1,
        path: '/',
      })
    );
    return res
      .status(200)
      .json({ code: 403, message: 'Đăng xuất thành công!' });
  } else return res.redirect(301, '/');
};
