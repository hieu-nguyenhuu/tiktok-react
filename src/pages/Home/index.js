import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMusic } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('avatar')}>
        <img src={images.avatar} alt="avatar" />
      </div>
      <div className={cx('content')}>
        <div className={cx('header')}>
          <div className={cx('info')}>
            <div className={cx('name')}>
              <p className={cx('user-name')}>Nguyen Huu Hieu</p>
              <p className={cx('nick-name')}>Helios</p>
            </div>
            <p>
              This is my first React project. I got familiar with React components, hooks, router, css modules, fetching
              API, config project,...
            </p>
            <div className={cx('sound')}>
              <span>
                <FontAwesomeIcon icon={faMusic} />
              </span>
              <p>original sound</p>
            </div>
            <div className={cx('location')}>
              <span>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <p>Tien Du District - Bac Ninh Province</p>
            </div>
          </div>
          <div className={cx('follow')}>
            <Button outline>Follow</Button>
          </div>
        </div>
        <div className={cx('body')}></div>
      </div>
    </div>
  );
}

export default Home;
