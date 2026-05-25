const checkEnvVar = (envVar: string | undefined) => {
    if (!envVar) {
        throw new Error("---- MISSING ENV VAR")
    }

    return envVar
}

export const DATABASE_URL = checkEnvVar(process.env.DATABASE_URL)
