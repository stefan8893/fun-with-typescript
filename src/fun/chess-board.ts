type Enumerate<
  N extends number,
  Acc extends number[] = [1]
> = Acc['length'] extends N
  ? N | Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

type ChessNumber = Enumerate<8>;
type ChessLetter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

type ChessBoard = `${ChessLetter}${ChessNumber}`;
