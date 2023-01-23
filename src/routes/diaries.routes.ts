import express from 'express'
import * as diaryServices from '../services/diaryServices'

const router = express.Router()

router.get('/', (_, res) => {
  res.send(diaryServices.getEntriesWithoutSesitiveInfo())
})
router.get('/:id', (req, res) => {
  const diary = diaryServices.fintById(+req.params.id)
  return diary != null ? res.send(diary) : res.sendStatus(404)
  //   res.send(diary?.comment)
})
router.post('/', (_, res) => {
  res.send('Saving a diary')
})

export default router
