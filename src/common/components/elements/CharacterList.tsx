import CharacterThumb from '@/elements/CharacterThumb';
import { CharacterResults } from '@/types/Character';

type Props = {
  dataToRender: CharacterResults[];
  error: boolean;
};

const CharacterList = ({ dataToRender, error }: Props) => {
  return (
    <div
      className="character-list"
      style={{
        maxWidth:
          dataToRender.length < 4
            ? dataToRender.length * 200 + (dataToRender.length - 1) * 20 + 'px'
            : '100%',
      }}
    >
      {!error &&
        dataToRender.map(data => (
          <CharacterThumb key={data.id} character={data} />
        ))}
      {error && <p>No Characters Found</p>}
    </div>
  );
};

export default CharacterList;
