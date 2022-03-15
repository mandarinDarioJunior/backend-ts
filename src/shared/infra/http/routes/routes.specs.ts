const API_URL = 'localhost:3333'

// Request
const callAPI = async (url: string) => {
  const data = await fetch(url)
  return data
}

describe('Get in "/" route in source', () => {
  it('return status 200 and "Hello World"', async () => {
    const result = await callAPI(API_URL)
    expect(result.status).toEqual(200)
  })
})
