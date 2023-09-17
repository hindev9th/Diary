import apiRequest from "../../utils/apiRequest";

export const AuthService = async () => {
    try {
        let res = await apiRequest.get('auth');
        return res.data;
    } catch (error) {
        console.log(error);
    }

}