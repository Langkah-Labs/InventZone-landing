import axios, { AxiosInstance } from 'axios'

class Monolith {
  host: string | undefined
  paths: Record<string, string>
  api: AxiosInstance

  constructor(host = process.env.NEXT_PUBLIC_INVENTZONE_BACKEND_HOST) {
    this.host = host

    this.paths = {
      registerDemo: '/api/users/demos/register',
    }

    this.api = axios.create({
      baseURL: this.host,
    })
  }

  /**
   * POST method
   * Body:
   * {
   *  name: "string",
   *  company: "string",
   *  email: "string",
   *  password: "string",
   *  referral: "string"
   * }
   */
  async registerDemo(data = {}) {
    const url = this.paths.registerDemo

    try {
      const response = await this.api.post(url, data)

      return response
    } catch (err) {
      console.error(`Failed to registering a user with error ${err}`)
    }
  }
}

export default Monolith
