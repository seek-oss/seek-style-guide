const isObject = obj => obj !== null
    && !Array.isArray(obj)
    && obj === Object(obj);

const navLinks = [
    {
        href: 'shell.navHomeLink',
        title: 'shell.navHomeTitle',
        text: 'HOME',
        hasIcon: false,
        isActive: true,
        childLinks: [],
    },
    {
        href: 'shell.navSearchLink',
        title: 'shell.navSearchTitle',
        text: 'Search for jobs',
        hasIcon: false,
        childLinks: [],
    },
    {
        href: 'shell.navSearchLink',
        title: 'shell.navSearchTitle',
        text: 'My jobsDB',
        hasIcon: false,
        childLinks: [],
    },
    {
        href: 'shell.navProfilesLink',
        title: 'shell.navProfilesTitle',
        text: 'Resources',
        hasIcon: false,
        childLinks: [],
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
