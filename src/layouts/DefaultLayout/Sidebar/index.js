import { faCompass, faHome, faPodcast, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Button from '~/components/Button';
import config from '~/configs';
import Image from '~/components/Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <div className={cx('wrapper')}>
      <nav className={cx('actions')}>
        <Button to={config.routes.home} nav leftIcon={<FontAwesomeIcon icon={faHome} />}>
          For You
        </Button>
        <Button to={config.routes.following} nav leftIcon={<FontAwesomeIcon icon={faUsers} />}>
          Following
        </Button>
        <Button to={config.routes.discover} nav leftIcon={<FontAwesomeIcon icon={faCompass} />}>
          Discover
        </Button>
        <Button to={config.routes.live} nav leftIcon={<FontAwesomeIcon icon={faPodcast} />}>
          LIVE
        </Button>
        <Button to={config.routes.profile} nav leftIcon={<FontAwesomeIcon icon={faUser} />}>
          Profile
        </Button>
      </nav>
      <div className={cx('log-in')}>
        <p className={cx('log-in-title')}>Log in to follow creators, like videos and view comments.</p>
        <Button outline lg>
          Log In
        </Button>
      </div>
      <div className={cx('footer')}>
        <Link to={config.routes.upload} className={cx('sideBarBtn')}>
          <Image src={images.sidebarBtn} className={cx('img')} />
          <div className={cx('make-effects')}>Make effects</div>
        </Link>
        <div className={cx('footer-btn-collection')}>
          <Button className={cx('footer-sidebar-btn')}>About</Button>
          <Button className={cx('footer-sidebar-btn')}>Newsroom</Button>
          <Button className={cx('footer-sidebar-btn')}>Contact</Button>
          <Button className={cx('footer-sidebar-btn')}>Career</Button>
        </div>
        <div className={cx('footer-btn-collection')}>
          <Button className={cx('footer-sidebar-btn')}>Tiktok for Good</Button>
          <Button className={cx('footer-sidebar-btn')}>Advertise</Button>
          <Button className={cx('footer-sidebar-btn')}>Developers</Button>
          <Button className={cx('footer-sidebar-btn')}>Transparency</Button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
