// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import nextConnect from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import { validate } from '../../shared/middleware/validate';
import { OrderSchema } from '../../shared/models/schemas';
import 


const handler = nextConnect<NextApiRequest, NextApiResponse>();
import cors from 'cors'

handler.use(validate('query',OrderSchema)).use(cors()).get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const orders = await axios({
      method: 'post', //you can set what request you want to be
      url: 'https://api.razorpay.com/v1/orders',
      data: {"amount":req.query.amount,"currency":req.query.currency},
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
      },
      auth: {
        username: 'rzp_test_FsZ3iT9MImRoRq',
        password: '29fF8OJqsR5LxyIBQ4a2OwLf',
      },
    });
    res.status(200).json(orders.data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export default handler;
