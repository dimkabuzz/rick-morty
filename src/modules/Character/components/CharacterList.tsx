import CharacterThumb from '@/modules/Character/components/CharacterThumb';
import type { CharacterResults } from '@/types/Character';
import calcMaxWidth from '@/utils/calcMaxWidth';

type Props = {
  dataToRender: CharacterResults[];
  error: boolean;
};

const CharacterList = ({ dataToRender, error }: Props) => {
  return (
    <div
      className="character-list"
      style={{
        maxWidth: calcMaxWidth(dataToRender),
      }}
    >
      {!error &&
        dataToRender.map(data => (
          <CharacterThumb key={data.id} character={data} />
        ))}
      {error && <p style={{ textAlign: 'center' }}>No Characters Found</p>}
    </div>
  );
};

export default CharacterList;
