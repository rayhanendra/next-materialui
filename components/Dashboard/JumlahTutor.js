import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function JumlahTutor() {
  const classes = useStyles();
  return (
    <>
      <Title>Jumlah Tutor</Title>
      <Typography component="p" variant="h4">
        53
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Tutor Aktif
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Tutor
        </Link>
      </div>

    </>
  );
}