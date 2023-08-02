declare namespace NodeJS {
    interface ProcessEnv {
        MONGODB_URL: string
        JWT_KEY: string
        JWT_TIME_EXP: number
    }
}