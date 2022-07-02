import apiService from '@/services/api.service.js'

export default class GraphicModel {
  constructor(payload) {
    this.id = Math.random()
    this.name = payload.name
    this.type = payload.type
    this.url = payload.url
    this.data = payload.data
  }
  static types = ['line', 'pie']

  static async create({ name, type, url }) {
    const { data } = await apiService.get(url)
    return new GraphicModel({ name, type, url, data })
  }
}