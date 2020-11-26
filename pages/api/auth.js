import { auth } from '../../utils/auth';

export default auth(async (req, res, data) => {
  res.json({
    code: 200,
    messange: 'Đăng nhập thành công!',
    id: data.sub,
    name: data.name,
  });
});
