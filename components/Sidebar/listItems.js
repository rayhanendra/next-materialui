import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

import Link from 'next/link';

export const mainListItems = (
  <div>
    <Link href="/Dashboard" passHref>
      <ListItem button component="a" >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>

    <Link href="/DaftarTutor" passHref>
      <ListItem button component="a" >
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Daftar Tutor" />
      </ListItem>
    </Link>

    <Link href="/LaporanPembukuan" passHref>
      <ListItem button component="a" >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Laporan Pembukuan" />
      </ListItem>
    </Link>

    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Matakuliah" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Harga" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Iklan" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Kode Promo" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Testimoni" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Internal Management</ListSubheader>

    <Link href="/DaftarAdmin" passHref>
      <ListItem button component="a" >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Daftar Admin" />
      </ListItem>
    </Link>

    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Daftar List Tutor" />
    </ListItem>

    <Link href="/DaftarListMahasiswa" passHref>
      <ListItem button component="a" >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Daftar List Mahasiswa" />
      </ListItem>
    </Link>
  </div>
);