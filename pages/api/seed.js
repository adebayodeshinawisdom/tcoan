import User from '../../model/UserModel';
import Product from '../../model/ProductModel';
import Course from '../../model/coursesModel';
import { data } from '../../utils/data';
import db from '../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await Course.deleteMany();
  await Course.insertMany(data.courses);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
};
export default handler;