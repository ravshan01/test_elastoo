import apiService from '@/services/api.service.js'

export default class Graphic {
  constructor(payload) {
    this.id = Math.random()
    this.name = payload?.name || ''
    this.type = payload?.type || Graphic.enum.types.line
    this.url = payload?.url || Graphic.urlsByType[Graphic.enum.types.line]
    this.data = payload?.data || null
  }

  static enum = {
    types: {
      line: 'line',
      pie: 'pie',
    },
  }
  static types = [Graphic.enum.types.line, Graphic.enum.types.pie]
  static urlsByType = {
    [Graphic.enum.types.line]: '92a0a266-0321-4ff5-9993-b394d03ceee2',
    [Graphic.enum.types.pie]: '2699115b-8ced-40c3-8072-b7fa9faf6047',
  }

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
