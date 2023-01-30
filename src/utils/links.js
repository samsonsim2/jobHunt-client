import QueryStatsIcon from '@mui/icons-material/QueryStats'
import BarChartIcon from '@mui/icons-material/BarChart'
import WorkIcon from '@mui/icons-material/Work'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
const links = [
  { id: 1, text: 'stats', path: '/', icon: <BarChartIcon /> },
  { id: 2, text: 'all jobs', path: 'all-jobs', icon: <QueryStatsIcon /> },
  { id: 3, text: 'add jobs', path: 'add-job', icon: <WorkIcon /> },
  { id: 4, text: 'profile', path: 'profile', icon: <AccountBoxIcon /> },
]

export default links
