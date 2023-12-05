import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFcn = () => {};

function Menu({ children, items = [], onChange = defaultFcn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, idx) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={idx}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  const onBack = () => {
    setHistory((prev) => prev.slice(0, history.length - 1));
  };
  return (
    <Tippy
      delay={[0, 500]}
      interactive
      placement="bottom-end"
      hideOnClick={false}
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-items')}>
            {history.length > 1 && <MenuHeader title={current.title} onBack={onBack} />}
            <div className={cx('sub-menu')}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => {
        setHistory((prev) => prev.slice(0, 1));
      }}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  onChange: PropTypes.func,
};

export default Menu;
