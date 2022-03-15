import express, { Router } from 'express'

const routes = Router()

routes.use('/', (_req, res) => res.send('Ola mundo dnv'))

export { routes }
