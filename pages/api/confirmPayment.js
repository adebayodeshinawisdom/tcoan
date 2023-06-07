import axios from 'axios';
import { getSession } from 'next-auth/react';
import Fee from '../../model/feesModel';
import db from '../../utils/db';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send('signin required');
  }

  async function postHandler(req, res) {
    if (req.method === 'POST') {
      const reference = req.body.reference; // Assuming you're sending the payment reference in the request body

      try {
        const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
          headers: {
            Authorization: `Bearer ${process.env.SECRET_KEY}`, // Replace with your actual Paystack secret key
            'Content-Type': 'application/json',
          },
        });

        const transactionData = response.data.data;

        // Extract relevant information from the transactionData object
        const status = transactionData.status;
        const amount = transactionData.amount;
        const customerEmail = transactionData.customer.email;
        // ... Extract other relevant information as needed

        // Verify the status of the transaction
        if (status === 'success') {
          const { orderId } = req.body;
          await db.connect();
          const filter = { orderId: orderId };
          const update = { isPaid: true };
          const options = { new: true };
          const paid = await Fee.findOneAndUpdate(filter, update, options);
          await db.disconnect();

          if (paid) {
            // Payment was successful, perform further actions as needed
            res.status(200).json({ message: `Payment successful. Amount: ${amount}, Customer Email: ${customerEmail}` });
          } else {
            // The fee entry with the specified orderId was not found
            res.status(404).json({ message: 'Fee entry not found.' });
          }
        } else {
          // Payment was not successful
          res.status(400).json({ message: 'Payment not successful.' });
        }
      } catch (error) {
        console.error('Paystack API error:', error);
        res.status(500).json({ message: 'An error occurred while confirming the payment.' });
      }
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }

  // Call the postHandler function to handle the POST request
  await postHandler(req, res);
};

export default handler;
