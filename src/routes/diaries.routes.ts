import express from 'express'
import * as diariesService from '../services/diaryServices'

const router = express.Router()

router.get('/', (_, res) => {
  res.send(diariesService.getEntriesWithoutSesitiveInfo())
})
router.post('/', (_, res) => {
  res.send('Saving a diary')
})

export default router
