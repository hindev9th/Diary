import apiRequest from "../../utils/apiRequest";

export const login = async (email, password) => {
    try {
        let res = await apiRequest.post('login', {
            email: email,
            password: password
        })
        return res.data;
    } catch (error) {
        console.log(error);
    }

}