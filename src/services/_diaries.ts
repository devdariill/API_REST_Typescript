import { Visibility, Weather } from '../enums'
import { DiaryEntry } from '../types'

const diariEntries: DiaryEntry[] = [
  {
    id: 1,
    date: '2017-01-01',
    weather: Weather.Sunny,
    visibility: Visibility.Good,
    comment: "Pretty scary flight, I'm glad I'm alive"
  },
  {
    id: 2,
    date: '2017-04-01',
    weather: Weather.Cloudy,
    visibility: Visibility.Average,
    comment: "Everything went better than expected, I'm learning much"
  },
  {
    id: 3,
    date: '2017-04-15',
    weather: Weather.Windy,
    visibility: Visibility.Good,
    comment: "I'm getting pretty confident although I hit a flock of birds"
  },
  {
    id: 4,
    date: '2017-05-11',
    weather: Weather.Cloudy,
    visibility: Visibility.Poor,
    comment: 'I almost failed the landing but I survived'
  }
]

export default diariEntries
