import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SongRequest from '../components/SongRequest.js';
import DJSet from '../components/DJSet';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import DJShows from '../data/DJShows.json';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
        height: 250,
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
});

class DJSetsScreen extends React.Component {
    render(props) {
        const { classes } = this.props;

        var showName = this.props.match.params.name.split('-').join(' ');
        var shows = DJShows['Shows'];
        var sets = [];
        var showSets = '';
        var showHost = '';
        var showDescription = '';
        var showGenre = '';
        var showTime = '';
        for (var i = 0; i < shows.length; i++) {
            // note: we add a key prop here to allow react to uniquely identify each
            // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
            console.log('show: ' + shows[i]['ShowName']);
            if (shows[i]['ShowName'] === showName) {
                showDescription = shows[i]['ShowDescription'];
                showHost = shows[i]['ShowHost'];
                showGenre = shows[i]['ShowGenre'];
                showSets = shows[i]['SetHistory'];
                console.log('set ' + showSets);
                for (var j = 0; j < showSets.length; j++) {
                    console.log('your set, my good sir: ' + showSets[j]);
                    sets.push(
                        <Grid item xs={12} sm={6} md={4}>
                            <DJSet set={showSets[j]} />
                        </Grid>
                    );
                }
            }
        }

        return (
            <div>
                {/* Hero unit */}
                <div padding={'theme.spacing(8, 0, 6)'}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            {showName}
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            {showDescription}
                        </Typography>
                        <div /*className={classes.heroButtons}*/ marginTop={'theme.spacing(4)'}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Main call to action
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <SongRequest/>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Set History
                </Typography>   
                <Container /*className={classes.cardGrid}*/
                    paddingTop={'theme.spacing(8)'}
                    paddingBottom={'theme.spacing(8)'} maxWidth="md">
                    <Grid container spacing={4} >
                        {sets}
                    </Grid>
                </Container>
            </div>
        );
    }
}
export default (DJSetsScreen);
