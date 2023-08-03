export class TaskModel {
  URL_ENDPOINT = './tasks.json'
  constructor () {
    console.log('inicio')
  }

  async getTaks () {
    const res = await fetch(this.URL_ENDPOINT, {
      method: 'GET'
    })
    const dataJSON = await res.json()

    return dataJSON
  }

  async createTask ({ id, descrip, isDone }) {
    const res = await fetch(this.URL_ENDPOINT, {
      method: 'POST'
    })
    const dataJSON = await res.json()

    return dataJSON
  }
}
