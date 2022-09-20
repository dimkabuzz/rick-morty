import { Fragment, Dispatch, SetStateAction } from 'react';
import type { CharacterInfo } from '@/types/Character';

type Props = {
  info: CharacterInfo;
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
};

const Pagination = ({ info, current, setCurrent }: Props) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrent(+e.target.value);
  };

  return (
    <div className="pagination">
      {info.prev && (
        <button onClick={() => setCurrent(current - 1)}>{`<<`}</button>
      )}
      {info.pages > 1 && (
        <Fragment>
          <span>Page </span>
          <select
            name="pages"
            id="pages"
            value={current}
            onChange={handleSelectChange}
          >
            {Array.from({ length: info.pages }, (_, i) => i + 1).map(page => (
              <option key={page} value={page} onClick={() => setCurrent(page)}>
                {page}
              </option>
            ))}
          </select>
          <span> of {info.pages}</span>
        </Fragment>
      )}
      {info.next && (
        <button onClick={() => setCurrent(current + 1)}>{`>>`}</button>
      )}
    </div>
  );
};

export default Pagination;
