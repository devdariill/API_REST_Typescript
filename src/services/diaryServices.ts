import diaryData from './diaries.json' // "resolveJsonModule":true // import json ts
// import diaryData from "./_diaries"  // 1
import { DiaryEntry, newDiaryEntry, NonSensitiveDiaryEntry } from '../types' // import type ts

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]
// const diaries  = diaryData
// const diaries: Array<DiaryEntry>= diaryData
// const diaries:  Array<DiaryEntry>= diaryData // ".tsx" , ".ts" , ".js" , ".json" // 1

export const getEntries = (): DiaryEntry[] => diaries
export const fintById = (id: number): NonSensitiveDiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id)
  if (entry != null) {
    console.log(entry)
    const { comment, ...entryWithoutComment } = entry
    return entryWithoutComment
  }
  return undefined
}
export const getEntriesWithoutSesitiveInfo = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility
  }))
}
export const addDiary = (newDiaryEntry: newDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    ...newDiaryEntry
  }
  diaries.push(newDiary)
  return newDiary
}
// const diariesWithoutSensitiveInfo = getEntriesWithoutSesitiveInfo()
// diariesWithoutSensitiveInfo[0].date
