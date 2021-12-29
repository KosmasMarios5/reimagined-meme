export type UnmappedUser = {
    UserId: string,
    UserLoginName: string,
    username: string,
    locale: string,
    UserEmail: string,
    UserCurrencySymbol: string,
    UserCurrencyCode: string,
    UserCurrencyDescription: string,
}

export type User = {
    id: string,
    loginName: string,
    username: string,
    locale: string,
    email: string,
    currency: {
        symbol: string,
        code: string,
        description: string,
    },
}
