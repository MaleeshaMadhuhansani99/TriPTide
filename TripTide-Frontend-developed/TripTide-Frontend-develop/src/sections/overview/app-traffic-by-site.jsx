import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';

// import { fShortenNumber } from 'src/utils/format-number';

// ----------------------------------------------------------------------

export default function AppTrafficBySite({ title, subheader, list, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box
        sx={{
          p: 3,
          gap: 6,
          display: 'grid',
          // gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        {/* {list.map((site) => (
          <Paper
            key={site.name}
            variant="outlined"
            sx={{ py: 2.5, textAlign: 'center', borderStyle: 'dashed' }}
          >
            <Box sx={{ mb: 0.5 }}>{site.icon}</Box>

            <Typography variant="h6">{fShortenNumber(site.value)}</Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {site.name}
            </Typography>
          </Paper>
        ))} */}
    
        <p>---------------------------------------------------------------------------- ----------------------------------------------------------------------------</p>
        
      </Box>

      <Button
          href="/login"
          target="_blank"
          variant="contained"
          color="inherit"
          sx={{ m: 2 }} // Margin right between buttons
        >
          Get Started
        </Button>
    </Card>
  );
}

AppTrafficBySite.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};
