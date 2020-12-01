import { verify } from 'jsonwebtoken';

export default async (req, res) => {
  if (req.method === 'GET') {
    let decoded = false;
    try {
      decoded = verify(req.cookies.auth, process.env.SECRET);
    } catch {
      console.log('loi cmnr');
    }

    console.log(decoded);

    switch (req.query.id) {
      case 'create':
        break;
      case 'update':
        break;
      case 'delete':
      default:
        return res.redirect(301, '/');
    }
  } else return res.redirect(301, '/');
};
