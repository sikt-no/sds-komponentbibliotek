export type PaginationRangeItem =
  { type: "page"; index: number } | { type: "spacer"; key: string };

export interface UsePaginationRangeParams {
  count: number;
  currentIndex: number;
  limit: number;
}

const indices = (length: number) => Array.from({ length }, (_, index) => index);

export const usePaginationRange = ({
  count,
  currentIndex,
  limit,
}: UsePaginationRangeParams): PaginationRangeItem[] => {
  const siblingCount = Math.floor((limit - 5) / 2);

  const siblingStart = currentIndex - siblingCount;
  const siblingEnd = currentIndex + siblingCount;

  const hasStartSpacer = siblingStart > 1;
  const hasEndSpacer = siblingEnd < count - 1;

  const startOvershoot = Math.max(0, 1 - siblingStart);
  const endOvershoot = Math.max(0, siblingEnd - (count - 2));

  const rangeStart = siblingStart + (hasStartSpacer ? 1 : 0) - endOvershoot;
  const rangeEnd = siblingEnd - (hasEndSpacer ? 1 : 0) + startOvershoot;

  return indices(count).flatMap<PaginationRangeItem>((index) => {
    const isEdge = index === 0 || index === count - 1;
    const isInRange = index >= rangeStart && index <= rangeEnd;
    const isSpacer = index === rangeStart - 1 || index === rangeEnd + 1;

    if (isEdge || isInRange) {
      return [{ type: "page", index }];
    }

    if (isSpacer) {
      return [{ type: "spacer", key: `spacer-${index}` }];
    }

    return [];
  });
};
