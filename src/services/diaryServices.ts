import diaryData from './diaries.json' // "resolveJsonModule":true // import json ts
// import diaryData from "./_diaries"  // 1
import { DiaryEntry, NonSensitiveDiaryEntry } from '../types' // import type ts

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]
// const diaries  = diaryData
// const diaries: Array<DiaryEntry>= diaryData
// const diaries:  Array<DiaryEntry>= diaryData // ".tsx" , ".ts" , ".js" , ".json" // 1

export const getEntries = (): DiaryEntry[] => diaries
export const getEntriesWithoutSesitiveInfo = (): NonSensitiveDiaryEntry[] => diaries
export const addEntry = (): undefined => undefined
// const diariesWithoutSensitiveInfo = getEntriesWithoutSesitiveInfo()
// diariesWithoutSensitiveInfo[0].date