import { environment } from "../../environment/environment"
const BACKEND_URL = environment.BACKEND_URL


export const API_ENDPOINTS = {
    login : `${BACKEND_URL}/login`,
    newTask : `${BACKEND_URL}/newTask`,
    updateTask : `${BACKEND_URL}/updateTask`,
    deleteTask : `${BACKEND_URL}/deleteTask`,
}