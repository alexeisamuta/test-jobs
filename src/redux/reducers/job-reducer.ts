import {jobsAPI} from "../api/api";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState = {
    jobs: [] as jobsType[],
    providers: [] as providerType[],
    loading: true,
    selectedJob: null as string | null
}

// thunks
export const setJobsTC = createAsyncThunk('job/setJobsTC', (a = undefined, thunkAPI) => {
    return jobsAPI.getJobs().then((response) => {
        thunkAPI.dispatch(setLoading({status: false}))
        return {jobs: response.data}
    })
})
export const setProvidersTC = createAsyncThunk('job/setProvidersTC', () => {
    return jobsAPI.getProviders().then((response) => {
        return {providers: response.data}
    })
})

const slice = createSlice({
    name: "job",
    initialState: initialState,
    reducers: {
        setLoading(state, action: PayloadAction<{ status: boolean }>) {
            state.loading = action.payload.status
        },
        setSelectedJob(state, action: PayloadAction<{ job: string }>) {
            state.selectedJob = action.payload.job
        }
    },
    extraReducers: builder => {
        builder.addCase(setJobsTC.fulfilled, (state, action) => {
            state.jobs = action.payload.jobs
        })
        builder.addCase(setProvidersTC.fulfilled, (state, action) => {
            state.providers = action.payload.providers
        })

    }
})

export const jobReducer = slice.reducer
export const {setLoading, setSelectedJob} = slice.actions

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