import apiService from '@/services/api.service.js'

export default class Graphic {
  constructor(payload) {
    this.id = Math.random()
    this.name = payload?.name || ''
    this.type = payload?.type || Graphic.enum.types.line
    this.url = payload?.url || null
    this.data = payload?.data || null
  }

  static enum = {
    types: {
      line: 'line',
      pie: 'pie',
    },
  }
  static types = [Graphic.enum.types.line, Graphic.enum.types.pie]

  /**
   *
   * @param { Object } payload тоже самое что передаём в конструктор
   * @return { Promise<Graphic> }
   */
  static async create(payload) {
    const isClassInstance = this instanceof Graphic

    const { data } = await apiService.get(isClassInstance ? this.url : payload.url)
    if (isClassInstance) this.data = data

    return isClassInstance ? this : new Graphic({ ...payload, data })
  }
}
