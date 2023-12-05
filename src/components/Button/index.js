import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  children,
  primary = false,
  outline = false,
  text = false,
  rounded = false,
  select = false,
  nav = false,
  sm = false,
  lg = false,
  leftIcon = false,
  rightIcon = true,
  disable = false,
  separate = false,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = NavLink;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  const classes = cx('wrapper', {
    primary,
    outline,
    text,
    rounded,
    select,
    nav,
    sm,
    lg,
    leftIcon,
    rightIcon,
    disable,
    separate,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {/* {rightIcon && <span className={cx('icon')}>{rightIcon}</span>} */}
    </Comp>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  text: PropTypes.bool,
  rounded: PropTypes.bool,
  disable: PropTypes.bool,
  select: PropTypes.bool,
  separate: PropTypes.bool,
  nav: PropTypes.bool,
  sm: PropTypes.bool,
  lg: PropTypes.bool,
  children: PropTypes.node.isRequired,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
