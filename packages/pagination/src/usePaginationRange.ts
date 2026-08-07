export type PaginationItem =
  { type: "page"; index: number } | { type: "spacer"; key: string };

interface UsePaginationRangeParams {
  count: number;
  currentIndex: number;
  limit: number;
}
const indices = (length: number) => Array.from({ length }, (_, index) => index);

export const usePaginationRange = ({
  count,
  currentIndex,
  limit,
}: UsePaginationRangeParams): PaginationItem[] => {
  // That's 5 fixed slots (first, last, current, 2 spacers), so the remaining
  // slots are split evenly on each side of the current page.
  const siblingCount = Math.floor((limit - 5) / 2);

  const siblingStart = currentIndex - siblingCount;
  const siblingEnd = currentIndex + siblingCount;

  const hasStartSpacer = siblingStart > 1;
  const hasEndSpacer = siblingEnd < count - 1;

  // When the sibling range would extend past an edge, slide it toward the
  // opposite side so the range stays anchored to the ends of the list.
  const startOvershoot = Math.max(0, 1 - siblingStart);
  const endOvershoot = Math.max(0, siblingEnd - (count - 2));

  const rangeStart = siblingStart + (hasStartSpacer ? 1 : 0) - endOvershoot;
  const rangeEnd = siblingEnd - (hasEndSpacer ? 1 : 0) + startOvershoot;

  return indices(count).flatMap<PaginationItem>((index) => {
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
