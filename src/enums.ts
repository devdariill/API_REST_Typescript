//
export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}
// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export enum Visibility {
  Good = 'good',
  Average = 'average',
  Poor = 'poor'
}
// export type Visibility = 'good' | 'average' | 'poor'
// usada para ser extendida pt 1
export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}
export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>
// export type NonSensitiveDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility' >
// export interface NonSensitiveDiaryEntry { // useless
//   id: number
//   date: string
//   weather: Weather
//   visibility: Visibility
//   comment: string
// }
// usada para ser extendida pt 2
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
// interface SpecialDiaryEntry extends DiaryEntry {
//   flightNumber: number
// }
// // no interfaz
// type SpecialDiaryEntry2 = DiaryEntry & {
//     flightNumber: number
// }
