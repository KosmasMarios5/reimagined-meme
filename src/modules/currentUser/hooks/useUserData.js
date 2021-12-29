//@flow
import {createSelector} from 'reselect'
import {useSelector} from "react-redux";
import {parseUser} from "../types/parse";

const selectIsLoggedIn = createSelector(
    (state) => state.currentUser.get('isLoggedIn'),
    (item) => item
)

const selectLoading = createSelector(
    (state) => state.currentUser.get('loading'),
    (item) => item
)

const selectErrorLogin = createSelector(
    (state) => state.currentUser.get('errorLogin'),
    (item) => item
)

const selectLanguage = createSelector(
    (state) => state.currentUser.get('language'),
    (item) => item
)

const selectData = createSelector(
    [
        (state) => state.currentUser.get('data'),
        (state) => state.currentUser.get('language'),
    ],
    (item, language) => parseUser(item, language)
)

const useUserData = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const loading = useSelector(selectLoading)
    const errorLogin = useSelector(selectErrorLogin)
    const language = useSelector(selectLanguage)
    const data = useSelector(selectData)

    return {
        isLoggedIn,
        loading,
        errorLogin,
        language,
        data,
    }
}

export default useUserData