import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Import material-ui Component
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  paperStyle: {
    padding: 20,
    boxSizing: 'border-box',
    minWidth: '80vw',
    minHeight: '20vh',
  },
  citation: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: '1.2em',
  },
  gridContainer: {
    display: 'grid',
    gridAutoFlow: 'row',
    alignContent: 'space-between',
    minHeight: '20vh',
  },
});

const SendQuote = () => {
  const classes = useStyles();
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQuotes = async () => {
    const result = await axios.get('http://localhost:5000/randomQuote', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setQuote(result.data.citation.citation);
    setLoading(false);
  };

  useEffect(() => {
    if (quote === null) {
      fetchQuotes();
    }
  }, [quote]);

  const sendToSlack = () => {
    fetchQuotes();
    const result = axios.post('http://localhost:5000/sendQuote', {
      headers: {
        'Content-type': 'application/json',
      },
      data: quote,
    });
    return result;
  };

  console.log(quote);

  if (!loading) {
    return (
      <Box style={{ height: '100vh' }}>
        <Typography variant='h3' align='center'>
          Envoyer votre citation dans Slack
        </Typography>
        <Grid
          container
          direction='row'
          alignItems='center'
          justify='center'
          spacing={1}>
          <Grid item style={{ marginTop: 20 }}>
            <Button variant='contained' onClick={() => fetchQuotes()}>
              Nouvelle Citation
            </Button>
          </Grid>
          <Grid item style={{ marginTop: 20 }}>
            <Button variant='contained' onClick={() => sendToSlack()}>
              Envoyer la Citation
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          direction='row'
          alignItems='center'
          justify='center'
          spacing={1}>
          <Grid item style={{ marginTop: 20 }}>
            <Paper elevation={3} className={classes.paperStyle}>
              <Box className={classes.gridContainer}>
                <Grid
                  container
                  direction='row'
                  alignItems='center'
                  justify='center'
                  spacing={1}>
                  <Typography variant='body1' className={classes.citation}>
                    "{quote.citation}"
                  </Typography>
                </Grid>
                <Grid
                  container
                  direction='row'
                  alignItems='center'
                  justify='space-between'
                  spacing={1}>
                  <Grid
                    item
                    container
                    alignItems='center'
                    xs={12}
                    sm={6}
                    md={3}
                    spacing={1}>
                    <Grid item xs={4}>
                      <Typography
                        variant='subtitle1'
                        style={{ fontWeight: 'bold' }}>
                        Acteur :{' '}
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant='body1'>
                        {quote.infos.acteur}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    alignItems='center'
                    xs={12}
                    sm={6}
                    md={3}
                    spacing={1}>
                    <Grid item xs={4}>
                      <Typography
                        variant='subtitle1'
                        style={{ fontWeight: 'bold' }}>
                        Episode :{' '}
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant='body1'>
                        {quote.infos.episode}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    alignItems='center'
                    xs={12}
                    sm={6}
                    md={3}
                    spacing={1}>
                    <Grid item xs={4}>
                      <Typography
                        variant='subtitle1'
                        style={{ fontWeight: 'bold' }}>
                        Personnage :{' '}
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant='body1'>
                        {quote.infos.personnage}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    alignItems='center'
                    xs={12}
                    sm={6}
                    md={3}
                    spacing={1}>
                    <Grid item xs={4}>
                      <Typography
                        variant='subtitle1'
                        style={{ fontWeight: 'bold' }}>
                        Saison :{' '}
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography variant='body1'>
                        {quote.infos.saison}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    );
  } else {
    return (
      <Box style={{ height: '100vh' }}>
        <Typography variant='h3' align='center'>
          Send your Kamelott Quotes to Slack
        </Typography>
        <Grid
          container
          direction='row'
          alignItems='center'
          justify='center'
          spacing={1}>
          <CircularProgress style={{ marginTop: 20 }} />
        </Grid>
      </Box>
    );
  }
};

export default SendQuote;
