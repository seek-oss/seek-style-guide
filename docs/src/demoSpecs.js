import Text from 'seek-style-guide/react/Text/Text.demo';
import Button from 'seek-style-guide/react/Button/Button.demo';
import TextField from 'seek-style-guide/react/TextField/TextField.demo';
import Autosuggest from 'seek-style-guide/react/Autosuggest/Autosuggest.demo';
import Textarea from 'seek-style-guide/react/Textarea/Textarea.demo';
import MonthPicker from 'seek-style-guide/react/MonthPicker/MonthPicker.demo';
import Checkbox from 'seek-style-guide/react/Checkbox/Checkbox.demo';
import SlideToggle from 'seek-style-guide/react/SlideToggle/SlideToggle.demo';
import Dropdown from 'seek-style-guide/react/Dropdown/Dropdown.demo';
import Rating from 'seek-style-guide/react/Rating/Rating.demo';
import HeaderDefault from 'seek-style-guide/react/Header/Header.demo';
import HeaderJobStreet from 'seek-style-guide/jobStreet/Header/Header.demo';
import HeaderJobsDB from 'seek-style-guide/jobsDB/Header/Header.demo';
import Footer from 'seek-style-guide/react/Footer/Footer.demo';
import Loader from 'seek-style-guide/react/Loader/Loader.demo';
import JobCard from 'seek-style-guide/react/JobCard/JobCard.demo';
import LogoDefault from 'seek-style-guide/react/Logo/Logo.demo';
import LogoJobStreet from 'seek-style-guide/jobStreet/Logo/Logo.demo';
import LogoJobsDB from 'seek-style-guide/jobsDB/Logo/Logo.demo';

const tenant = process.env.SKU_TENANT;

let Header = HeaderDefault;
let Logo = LogoDefault;
if (tenant === 'jobStreet'){
  Header = HeaderJobStreet;
  Logo = LogoJobStreet;
}else if (tenant === 'jobsDB'){
  Header = HeaderJobsDB;
  Logo = LogoJobsDB;
}

export default [
  Text,
  Button,
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
  JobCard
];
