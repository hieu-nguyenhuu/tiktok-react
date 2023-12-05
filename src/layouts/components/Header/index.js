//import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  // faSpinner,
  faPlus,
  faEllipsisVertical,
  faEarthAsia,
  faKeyboard,
  faCircleQuestion,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import HeadTippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { UploadIcon } from '~/components/Icons';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '~/layouts/components/Search';
import configs from '~/configs';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and Help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

const USER_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'View profile',
    to: '/profile',
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: 'Get coins',
    to: '/coin',
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: 'Settings',
    to: '/settings',
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: 'Log out',
    to: '/logout',
    separate: true,
  },
];
const currentUser = false;

function Header() {
  //const [searchResult, setSearchResult] = useState([]);

  const handleChangeMenu = (menuItem) => {};

  return (
    <header className={cx('wrapper')}>
      <div className={cx('content')}>
        <Link to={configs.routes.home} className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </Link>

        <Search />

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <HeadTippy content="Upload video" delay={[0, 200]}>
                <button className={cx('user-action')}>
                  <UploadIcon />
                </button>
              </HeadTippy>
            </>
          ) : (
            <>
              <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Button>
              <Button primary sm>
                Login
              </Button>
            </>
          )}
          <Menu items={currentUser ? USER_ITEMS : MENU_ITEMS} onChange={handleChangeMenu}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src="https://imgs.search.brave.com/X22uU9QID4EyyaV8k2Y3KrCIOq5B-GahjN_JMuwkunc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly92YXJp/ZXR5LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8xMS9T/Y3JlZW4tU2hvdC0y/MDIzLTExLTA5LWF0/LTUuMDYuMTItUE0u/cG5nP3c9MTAwMCZo/PTU2MyZjcm9wPTE"
                alt="avatar"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
