import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_, res) => {
  res.send(diaryServices.getEntriesWithoutSesitiveInfo())
})
router.get('/:id', (req, res) => {
  const diary = diaryServices.fintById(+req.params.id)
  return diary !== null ? res.send(diary) : res.sendStatus(404)
  //   res.send(diary?.comment)
})
router.post('/', (req, res) => {
  try {
    const nweDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = diaryServices.addDiary(nweDiaryEntry)
    res.json(addedDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
