export type DefaultRes = {
  code: number
  message: string
}

/**
 * Response type with error
 */
export type ResponseError = DefaultRes & {
  state: 'error'
  timestamp: string
  path: string
  status: RESPONSE_STATUS
}

/**
 * Response type with success
 */
export type ResonseSuccess<T> = DefaultRes & {
  state: 'ok'
  data: T
}

/**
 * Enum type for mapping error code <-> error status
 */
export const ResponseStatus = {
  200: 'OK',
  201: 'Created',

  404: 'Not Found'
} as const
type RESPONSE_STATUS = typeof ResponseStatus[keyof typeof ResponseStatus]
