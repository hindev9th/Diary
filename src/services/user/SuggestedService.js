import apiRequest from "../../utils/apiRequest"

export const SuggestedService = async () => {
    try {
        let res = await apiRequest.get('user/suggested');
        return res.data;
    } catch (error) {
        console.log(error);
    }

}