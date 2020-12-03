import {RootStore} from "../store";

export const jobSelector = (state: RootStore)  => state.jobs
export const providersSelector = (state: RootStore)  => state.providers
export const loadingSelector = (state: RootStore)  => state.loading
export const selectedJobSelector = (state: RootStore)  => state.selectedJob
