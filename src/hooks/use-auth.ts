import {useSelector} from "react-redux";

export const useAuth = () => {
    // @ts-ignore
    const {email, token, id} = useSelector(state => state.user)

    return{
        idAuth: !!email,
        email,
        token,
        id,
    }
}