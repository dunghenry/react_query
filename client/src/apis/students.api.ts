import { IStudents } from './../types/students.type'
import http from 'utils/http'

export const getStudents = (page: number | string, limit: string | number) =>
  http.get<IStudents>('students', {
    params: {
      _page: page,
      _limit: limit
    }
  })
