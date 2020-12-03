import React from "react";
import {ProfileCard} from "./ProfileCard";
import {providerType} from "../../redux/reducers/job-reducer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import {CircularProgress} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
       display: 'flex',
       flexWrap: 'wrap'
    },
    item: {
        padding: '10px',
        [theme.breakpoints.up('sm')] : {
            flexBasis: '50%'
        },
        [theme.breakpoints.down('sm')] : {
            flexBasis: '100%'
        },
        [theme.breakpoints.up('lg')] : {
            flexBasis: '33.33%'
        },
    }
}))

export const ProfileGrid = React.memo(({loading, providers}: ProfileGridType ) => {

    const classes = useStyles()
    console.log("providers", providers)
    if (loading || !providers) {
        return <Grid container justify="center">
            <CircularProgress/>
        </Grid>
    }
    return (
        <div className={classes.root}>
            {providers.map((el) => (
                <div key={el.id} className={classes.item}>
                   <ProfileCard title={el.name} subSpecialties={el.job}/>
                </div>
            ))}
        </div>
    )
})

export type ProfileGridType = {
    providers: providerType[],
    loading: boolean
}