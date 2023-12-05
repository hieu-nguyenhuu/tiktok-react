// import classNames from 'classnames/bind';
// import styles from './Menu.module.scss';
import PropTypes from 'prop-types';
import Button from '~/components/Button';

// const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  return (
    <Button select separate={data.separate} leftIcon={data.icon} to={data.to} onClick={onClick}>
      {data.title}
    </Button>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default MenuItem;
