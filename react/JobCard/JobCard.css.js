import { saGrey4, saGrey2, saGrey1, linkBlue } from '../../theme/palette/palette.js';

export default {
  '.root': {
    width: '100%',
    marginBottom: 0,
    borderStyle: 'solid',
    borderBottomWidth: '1px',
    borderColor: saGrey4
  },
  '.company': {
    paddingBottom: 0,
    lineHeight: '14px !important',
    color: saGrey1
  },
  '.positionTitle': {
    fontSize: '16px !important',
    lineHeight: '19px !important',
    color: linkBlue
  },
  '.sellingPoints': {
    '& ul': {
      listStyleType: 'disc'
    }
  },
  '.footer': {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 0
  },
  '.footer span': {
    verticalAlign: 'middle',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  },
  '.companyLogoWrapper': {
    border: `1px ${saGrey4} solid`,
    marginLeft: '15px',
    width: '76px',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  '.companyLogo': {
    width: '100%'
  },
  '.bodyDescription': {
    paddingTop: 0
  },
  '.postingDuration': {
    color: saGrey2
  },
  '.jobInfo': {
    flexBasis: 'auto',
    overflow: 'hidden'
  }
};
