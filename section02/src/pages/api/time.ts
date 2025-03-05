import { NextApiResponse } from 'next';
import { NextApiRequest } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const date = new Date();
  res.json({ time: date.toLocaleString() });
}
