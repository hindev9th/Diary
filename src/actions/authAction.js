import { FETCH_AUTH } from "./constants";
import { AuthService } from "../services/auth/AuthService";

export const getAuth = async () => {
    let data = await AuthService();
    return {
        type: FETCH_AUTH,
        payload: data,
    };
}