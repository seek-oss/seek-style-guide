import Text from 'seek-style-guide/react/Text/Text.demo';
import Button from 'seek-style-guide/react/Button/Button.demo';
import ButtonGroup from 'seek-style-guide/react/ButtonGroup/ButtonGroup.demo';
import TextField from 'seek-style-guide/react/TextField/TextField.demo';
import Autosuggest from 'seek-style-guide/react/Autosuggest/Autosuggest.demo';
import Textarea from 'seek-style-guide/react/Textarea/Textarea.demo';
import MonthPicker from 'seek-style-guide/react/MonthPicker/MonthPicker.demo';
import Checkbox from 'seek-style-guide/react/Checkbox/Checkbox.demo';
import SlideToggle from 'seek-style-guide/react/SlideToggle/SlideToggle.demo';
import Dropdown from 'seek-style-guide/react/Dropdown/Dropdown.demo';
import Rating from 'seek-style-guide/react/Rating/Rating.demo';
import DefaultHeader from 'seek-style-guide/react/Header/Header.demo';
import JobStreetHeader from 'seek-style-guide/jobStreet/Header/Header.demo';
import JobsDBHeader from 'seek-style-guide/jobsDB/Header/Header.demo';
import DefaultFooter from 'seek-style-guide/react/Footer/Footer.demo';
import JobStreetFooter from 'seek-style-guide/jobStreet/Footer/Footer.demo';
import JobsDBFooter from 'seek-style-guide/jobsDB/Footer/Footer.demo';
import Loader from 'seek-style-guide/react/Loader/Loader.demo';
import JobCard from 'seek-style-guide/react/JobCard/JobCard.demo';
import DefaultLogo from 'seek-style-guide/react/Logo/Logo.demo';
import JobStreetLogo from 'seek-style-guide/jobStreet/Logo/Logo.demo';
import JobsDBLogo from 'seek-style-guide/jobsDB/Logo/Logo.demo';
import NavigationBar from 'seek-style-guide/react/NavigationBar/NavigationBar.demo';
import JobCardLoader from 'seek-style-guide/react/JobCardLoader/JobCardLoader.demo';

const tenant = process.env.SKU_TENANT;

let Header = DefaultHeader;
let Logo = DefaultLogo;
let Footer = DefaultFooter;
if (tenant === 'jobStreet') {
  Header = JobStreetHeader;
  Logo = JobStreetLogo;
  Footer = JobStreetFooter;
} else if (tenant === 'jobsDB') {
  Header = JobsDBHeader;
  Logo = JobsDBLogo;
  Footer = JobsDBFooter;
}

export default [
  Text,
  Button,
  ButtonGroup,
  TextField,
  Autosuggest,
  Textarea,
  MonthPicker,
  Checkbox,
  SlideToggle,
  Dropdown,
  Rating,
  Loader,
  Logo,
  Header,
  Footer,
  NavigationBar,
  JobCard,
  JobCardLoader
];
