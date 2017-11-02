const isObject = obj => obj !== null
    && !Array.isArray(obj)
    && obj === Object(obj);

const navLinks = [
    {
        href: 'shell.navHomeLink',
        title: 'shell.navHomeTitle',
        text: 'Home',
        hasIcon: false,
        childLinks: [],
    },
    {
        href: 'shell.navSearchLink',
        title: 'shell.navSearchTitle',
        text: 'Search Jobs',
        hasIcon: false,
        childLinks: [],
    },
    {
        href: 'shell.navProfilesLink',
        title: 'shell.navProfilesTitle',
        text: 'Company Profiles',
        hasIcon: false,
        childLinks: [],
    },
    {
        href: 'shell.navMyCompanyLink',
        title: 'shell.navMyCompanyTitle',
        text: 'MyJobStreet',
        hasIcon: false,
        childLinks: [],
    },
    {
        href: 'shell.navFriendsLink',
        title: 'shell.navFriendsTitle',
        text: 'Friends',
        hasIcon: true,
        childLinks: [],
    },
    {
        href: '',
        title: 'shell.navMoreTitle',
        text: 'More',
        hasIcon: false,
        hideOnMobile: true,
        childLinks: [
            {
                href: 'shell.navOverseasLink',
                title: 'shell.navOverseasTitle',
                text: 'Overseas Jobs',
            },
            {
                href: 'shell.navGradLink',
                title: 'shell.navGradTitle',
                text: 'Fresh Graduate Jobs',
            },
        ],
    },
];

const userLoggedOutLinks = [
    {
        href: 'shell.navLoginLink',
        title: 'shell.navLoginTitle',
        text: 'Log In',
        hasIcon: false,
        childLinks: [],
    },
    {
        href: 'shell.navSignUpLink',
        title: 'shell.navSignUpTitle',
        text: 'Sign Up',
        hasIcon: false,
        childLinks: [],
    },
];

const getUserLinks = (candidate) => {
    const isUserLoggedIn = isObject(candidate);
    return isUserLoggedIn
        ? [{
            href: '',
            title: candidate.username,
            text: candidate.username,
            preventTranslation: true,
            hasIcon: false,
            childLinks: [
                {
                    href: 'shell.navLogoutLink',
                    title: 'shell.navLogoutTitle',
                    text: 'shell.navLogoutText',
                },
                {
                    href: 'shell.navHelpLink',
                    title: 'shell.navHelpTitle',
                    text: 'shell.navHelpText',
                },
                {
                    href: 'shell.navAccountLink',
                    hrefParams: {
                        id: candidate.id,
                    },
                    title: 'shell.navAccountTitle',
                    text: 'shell.navAccountText',
                },
            ],
        }]
        : userLoggedOutLinks;
};

export default {
    navLinks,
    getUserLinks,
};
