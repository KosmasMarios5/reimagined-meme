import type {UnmappedUser, User} from "./types";

export const mapUser: User = (datum: UnmappedUser) => {
    if (!datum) return
    return {
        id: datum.UserId,
        loginName: datum.UserLoginName,
        username: datum.username,
        locale: datum.locale?.toLowerCase(),
    }
}