const mode = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'development' : 'production'

export const configuration = window.GLOBAL_CONFIGURATION[mode]

export const API = mode === 'production' ? configuration.API_HOST[window.location.hostname] : configuration.API_HOST;
