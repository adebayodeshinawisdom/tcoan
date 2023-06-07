import { getSession } from 'next-auth/react';
import Order from '../../../model/OrdersModel';
import Product from '../../../model/ProductModel';
import db from '../../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send('signin required');
  }

  const { user } = session;
  

  await db.connect();
  const newOrder = new Order({
    ...req.body,
    user: user._id,

  });

  const updateOrder = await newOrder.save();
  await db.disconnect();
  res.status(201).send(updateOrder);

  await db.connect();
  const order = await Order.findById(req.query.id);
  if(order){
  for (const index in order.orderItems) {
    const item = order.orderItems[index];
    const product = await Product.findById(item.product);
    product.countInStock -= item.quantity;
    await product.save();
    }
    await db.disconnect();
    
  }else {
    await db.disconnect();
    res.status(404).send({ message: 'Error: order not found' });
  }
};
export default handler;