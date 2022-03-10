import express from 'express'

import { routes } from '@shared/infra/http/routes'

const app = express()

app.use(routes)

export { app }
