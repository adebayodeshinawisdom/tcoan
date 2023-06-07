import { getSession } from 'next-auth/react';
import Course from '../../../model/coursesModel';
import db from '../../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send('signin required');
  }

  await db.connect();

  const course = await Course.findById(req.query.id)
  await db.disconnect();
  res.send(course.video);
  
  
};

export default handler;