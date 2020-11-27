import cookie from 'cookie';

export default async (req, res) => {
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('auth', '', {
      maxAge: -1,
      path: '/',
    })
  );
  return res.status(200).json({ code: 200, message: 'Đăng xuất thành công!' });
};
