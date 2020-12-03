import React from "react"
import {Avatar, Card, CardContent, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        padding: "4px 24px"
    },
    avatar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
}))

export const ProfileCard = React.memo(({subSpecialties, title}: ProfileCardType) => {
    const classes = useStyles()

    return (
        <div>
            <Card className={classes.root}>
                <div className={classes.avatar}>
                    {/*avatars from the server do not come (403)*/}
                    <Avatar alt={title}/>
                </div>
                <div>
                    <CardContent>
                        <Typography component="h5" variant="h5">
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {(subSpecialties && subSpecialties.length > 0) ? subSpecialties : " - "}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </div>
    )
})

type ProfileCardType = {
    title: string
    subSpecialties: string
}