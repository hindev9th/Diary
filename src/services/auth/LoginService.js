import apiRequest from "../../utils/apiRequest";

export const login = async (data) => {
    try {
        let res = await apiRequest.post('login', data)
        return res.data;
    } catch (error) {
        console.log(error);
    }

}