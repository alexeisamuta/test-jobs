import React, {useEffect, useMemo} from 'react';
import {ProfileGrid} from '../common/ProfileGrid';
import {setProvidersTC} from "../../redux/reducers/job-reducer";
import {useDispatch, useSelector} from "react-redux";
import {loadingSelector, providersSelector, selectedJobSelector} from "../../redux/selectors/selectors";


export function Providers() {

    const selectedJob = useSelector(selectedJobSelector)
    const providers = useSelector(providersSelector)
    const loading = useSelector(loadingSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setProvidersTC())
    }, [dispatch])

    const preparedData = useMemo(() => {
        if (!Array.isArray(providers)) {
            return []
        }
        if (!selectedJob) {
            return providers
        }
        return providers.filter((el) => el.job === selectedJob)
    }, [providers, selectedJob])

    return <ProfileGrid providers={preparedData} loading={loading}/>
}
