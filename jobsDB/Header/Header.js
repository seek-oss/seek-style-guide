import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Logo from '../Logo/Logo';
import Button from 'seek-asia-style-guide/react/Button/Button';
import MenuIcon from 'seek-asia-style-guide/react/HamburgerIcon/HamburgerIcon';
import Nav from './components/Nav/Nav';
import styles from './header.less';
import links from './links';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavActive: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false);
    }
    handleClick(e) {
        const userClickedOutsideOfDropdown = !this.dropdownNode.contains(e.target);
        if (userClickedOutsideOfDropdown) {
            this.showNav(false);
        }
    }
    showNav(shouldShowNav) {
        const eventAction = shouldShowNav ? 'addEventListener' : 'removeEventListener';
        document[eventAction]('click', this.handleClick, false);
        this.setState({
            isNavActive: shouldShowNav,
        });
    }
    render() {
        const { user } = this.props;
        const { isNavActive } = this.state;
        const userLinks = links.getUserLinks(user.candidate);
        
        return (
        <header className={styles.root} role="banner" aria-label="Primary navigation">
          <section className={styles.content}>
            <div
                className={styles.container}
            >
                <button
                    className={styles.toggle}
                    onClick={() => {
                        if (!isNavActive) {
                            this.showNav(true);
                        }
                    }}
                >
                    <MenuIcon />
                </button>   

                <div
                    className={styles.navWrapper}
                    ref={(node) => { this.dropdownNode = node; }}
                >
                    <div
                        className={
                            classNames({
                                [styles.navContainer]: true,
                                [styles.navContainerHide]: !isNavActive,
                            })
                        }
                    >
                                <Nav key={'navLinks'} links={links.navLinks} />
                                <Nav key={'userLinks'} links={userLinks}  />
                                
                    </div>
                </div>
                
                <ul className={styles.navbarUniversalLogin}>                             
                    <li>
                        <Button className={styles.employerLink} key={'employerLinks'} color="hyperlink" component="a">Employer site</Button>
                    </li>
                    <li>
                        <Button className={styles.loginLink} key={'navLinks'} color="hyperlink" component="a">Log in</Button>
                    </li>
                    <li>
                        <Button key={'userLinks'} color="hyperlink" component="a">Sign up</Button>
                    </li>
                </ul>

                <div className={styles.bannerWrapper}>
                    <div className={styles.bannerContainer}>
                        <div className={styles.banner}>
                            <a className={styles.logoLink} href="/">
                                <Logo svgClassName={styles.logoSvg}/>
                            </a>
                        </div>
                    </div>
                </div>               
            </div>
        </section>
        </header>
        );
    }
}

Header.propTypes = {
    user: PropTypes.object.isRequired
};

export default Header;
