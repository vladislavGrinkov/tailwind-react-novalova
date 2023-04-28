import data from '../../data/profiles.json';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function fetchData(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({data})
  }