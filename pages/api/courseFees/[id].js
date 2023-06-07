import { getSession } from 'next-auth/react';
import Fee from '../../../model/feesModel';
import db from '../../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send('signin required');
  }

  await db.connect();

  const fee = await Fee.findById(req.query.id)
  .populate('user', 'id name email')
  .populate('course','id name image price duration category');
  await db.disconnect();
  res.send(fee);
  
  
};

export default handler;