export const tokenExpiry = {
    refreshTokenExp: '7d',
    accessTokenExp: '10m'
}

export const cookieExpiry = {
    maxAge: 24 * 60 * 60 * 1000
}

export const secrets = {
    accessToken: process.env.ACCESS_TOKEN_SECRET,
    refreshToken: process.env.REFRESH_TOKEN_SECRET,
}

