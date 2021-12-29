import type {User} from "./types";

export const parseUser: User = (datum) => {
    if (!datum) return;
    return {
        id: datum.get('id'),
        loginName: datum.get('loginName'),
        username: datum.get('username'),
        locale: datum.get('locale'),
    }
}