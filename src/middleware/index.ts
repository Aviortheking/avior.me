import { sequence } from "astro/middleware"

import responseBuilder from './responseBuilder'

export const onRequest = sequence(responseBuilder)
