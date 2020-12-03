import {Dispatch} from "redux";
import {jobsAPI} from "../api/api";


const initialState = {
    jobs: [] as jobsType[],
    providers: [] as providerType[],
    loading: true,
    selectedJob: null as string | null
}

export const jobReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET_JOBS":
            return {
                ...state,
                jobs: action.payload
            }

        case "SET_PROVIDERS":
            return {
                ...state,
                providers: action.payload
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: action.status
            }
        case "SET_SELECTED_JOB":
            return {
                ...state,
                selectedJob: action.job
            }
        default:
            return state
    }
}

// acton
const setJobs = (payload: jobsType[]) => ({type: 'SET_JOBS', payload} as const)
const setProviders = (payload: providerType[]) => ({type: 'SET_PROVIDERS', payload} as const)
const setLoading = (status: boolean) => ({type: 'SET_LOADING', status} as const)
export const setSelectedJob = (job: string) => ({type: 'SET_SELECTED_JOB', job} as const)


// thunks
export const setJobsTC = () => (dispatch: Dispatch) => {
    return jobsAPI.getJobs().then((response) => {
        dispatch(setJobs(response.data))
        dispatch(setLoading(false))
    })
}
export const setProvidersTC = () => (dispatch: Dispatch) => {
    return jobsAPI.getProviders().then((response) => {
        dispatch(setProviders(response.data))
    })
}


// types
export type jobsType = {
    id: number,
    jobId: string,
    title: string
}
export type providerType = {
    id: string,
    createdAt: string,
    avatar: string,
    name: string,
    email: string,
    companyName: string,
    address: string,
    phone: string,
    job: string,
    about: string
}
type ActionType = ReturnType<typeof setJobs>
    | ReturnType<typeof setProviders>
    | ReturnType<typeof setLoading>
    | ReturnType<typeof setSelectedJob>