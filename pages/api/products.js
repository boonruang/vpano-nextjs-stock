import { products } from './dummy'

export default function handler(req, res) {
  res.statusCode = 200
  res.json(products)
}
