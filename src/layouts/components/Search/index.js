import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/hooks';
import * as searchRequest from '~/services/searchService';
const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [searchVisible, setSearchVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [debounceData] = useDebounce(searchValue, 500);
  const inputRef = useRef();

  useEffect(() => {
    if (!debounceData || !debounceData.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);
      const result = await searchRequest.search(debounceData);
      setSearchResult(result);
      setLoading(false);
    };
    fetchApi();
  }, [debounceData]);

  const focusInput = () => {
    inputRef.current.focus();
    setSearchVisible(true);
  };
  return (
    <Tippy
      visible={searchVisible && searchResult.length > 0}
      interactive
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Accounts</h4>
            {searchResult.map((item) => (
              <AccountItem key={item.id} data={item} onClick={() => setSearchResult([])} />
            ))}
            <h4 className={cx('see-more')}>Xem tất cả kết quả</h4>
          </PopperWrapper>
        </div>
      )}
      onClickOutside={() => {
        setSearchVisible(false);
      }}
      appendTo={document.body}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          type="text"
          value={searchValue}
          placeholder="Search accounts and videos"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onClick={focusInput}
        />
        {!!searchValue && !loading && (
          <button
            className={cx('clear')}
            onClick={() => {
              setSearchValue('');
              focusInput();
            }}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </Tippy>
  );
}

export default Search;
