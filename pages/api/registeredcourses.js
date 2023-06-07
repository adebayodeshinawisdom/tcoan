import { getSession } from 'next-auth/react';
import Fee from '../../model/feesModel';
import db from '../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send('signin required');
  }

  const { user } = session;

  try {
    await db.connect();
    const registeredCourse = await Fee.find({ user: user._id }).populate('course', 'id video image name');
    await db.disconnect();
    res.send(registeredCourse);
    console.log(registeredCourse);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred' });
  }
};

export default handler;
