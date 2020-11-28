import { auth } from '../../utils/auth';

export default auth(async (req, res, data) => {
  res.status(200).json({
    code: 200,
    messange: 'Bạn đã đăng nhập!',
    id: data.sub,
    name: data.name,
    username: data.username,
  });
});
