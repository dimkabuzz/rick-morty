import { Dispatch, SetStateAction } from 'react';

type Props = {
  query: Dispatch<SetStateAction<string>>;
};

const Search = ({ query }: Props) => {
  const searchBtn = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const onInputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const enteredValue = e.currentTarget.value;
    query(enteredValue);
  };

  return (
    <form className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Search for characters"
        onChange={onInputChangeHandler}
      />
      <button className="btn" onClick={searchBtn}>
        Search
      </button>
    </form>
  );
};

export default Search;
