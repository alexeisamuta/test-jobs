import React, {useEffect} from 'react';
import './App.css';
import Jobs from './components/jobs/Jobs';
import {Providers} from './components/provider/Providers';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {setJobsTC} from "./redux/reducers/job-reducer";
import {jobSelector, loadingSelector} from "./redux/selectors/selectors";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

function App() {

    const classes = useStyles()

    const jobs = useSelector(jobSelector)
    const loading = useSelector(loadingSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setJobsTC())
    }, [dispatch])

    return (
        <div className={classes.root}>
            <Jobs jobs={jobs} loading={loading}/>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                    <Providers />
            </main>
        </div>
    );
}

export default App;
