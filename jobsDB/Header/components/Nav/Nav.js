import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Text from 'seek-asia-style-guide/react/Text/Text';
import FbIcon from 'seek-asia-style-guide/react/FacebookIcon/FacebookIcon';
import styles from './nav.less';

const noop = i => i;

class Nav extends Component {

    static propTypes = {
        links: PropTypes.array.isRequired,
        isRightAligned: PropTypes.bool
    }
    static defaultProps = {
        isRightAligned: false,
    }

    constructor(props) {
        super(props);
        this.state = {
            isDropdownVisible: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false);
    }
    setDropdownVisibility(isVisible) {
        const eventAction = isVisible ? 'addEventListener' : 'removeEventListener';
        document[eventAction]('click', this.handleClick, false);
        this.setState({
            isDropdownVisible: isVisible,
        });
    }
    handleClick(e) {
        if (!this.dropdownNode.contains(e.target)) {
            this.setDropdownVisibility(false);
        }
    }
    render() {
        const { links, isRightAligned } = this.props;
        const { isDropdownVisible } = this.state;
        return (
            <ul
                className={
                    classNames({
                        [styles.container]: true,
                        [styles.isRightAligned]: isRightAligned,
                    })
                }
            >
                {
                    links.map((link) => {
                        const hasChildren = !!link.childLinks.length;
                        const clickHandler = hasChildren
                            ? (e) => {
                                if (!isDropdownVisible) {
                                    this.setDropdownVisibility(true);
                                }
                                e.preventDefault();
                            }
                            : noop;

                        return (
                            <li
                                key={link.text}
                                className={
                                    classNames({
                                        [styles.item]: true,
                                        [styles.itemHasDropdown]: hasChildren,
                                        [styles.itemShowDropdown]: hasChildren && isDropdownVisible,
                                    })
                                }
                            >
                                <a
                                    className={
                                        classNames({
                                            [styles.link]: true,
                                            [styles.linkIsActive]: link.isActive,
                                            [styles.linkHideOnMobile]: link.hideOnMobile,
                                        })
                                    }
                                    onClick={clickHandler}
                                    href={'#'}
                                    title={link.title}
                                >
                                    {
                                        link.hasIcon &&
                                        <FbIcon className={styles.fbIcon} />
                                    }
                                    { <span>{link.text}</span> }
                                </a>
                                {
                                    hasChildren &&
                                    (
                                        <ul
                                            className={styles.dropdownList}
                                            ref={(node) => { this.dropdownNode = node; }}
                                        >
                                            {
                                                link.childLinks.map(childLink => (
                                                    <li
                                                        key={childLink.text}
                                                        className={styles.dropdownItem}
                                                    >
                                                        <a
                                                            className={styles.dropdownLink}
                                                            href={'#'}
                                                            title={'Title'}
                                                        >
                                                            <Text>{childLink.text}</Text>
                                                        </a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    )
                                }
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default Nav;
