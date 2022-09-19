import type { CharacterResults } from '@/types/Character';

export default function calcMaxWidth(card: CharacterResults[]) {
  const totalCards = card.length;
  return totalCards < 4
    ? totalCards * 200 + (totalCards - 1) * 20 + 'px'
    : '100%';
}
