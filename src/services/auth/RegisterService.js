import apiRequest from "../../utils/apiRequest";
export const RegisterService = async(data) =>{
    try {
        let res = await apiRequest.post('register',data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};