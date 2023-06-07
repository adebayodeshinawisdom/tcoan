import { getSession } from 'next-auth/react';
import Fee from '../../model/feesModel';
import Course from '../../model/coursesModel';
import db from '../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send('signin required');
  }

  const { user } = session;
  console.log('User:', user)  

  await db.connect();
  const newFee = new Fee({
    ...req.body,
    user: user._id,
    

  });

  const updateFee = await newFee.save();
  await db.disconnect();
  res.status(201).send(updateFee);


};
export default handler;