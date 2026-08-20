export { SpinnerIcon } from "./src/SpinnerIcon";
export type { LogoIconsProps } from "./src/LogoIcons";
export { LinkedInLogo } from "./src/LogoIcons";
export * from "./build/index";
import "./src/icon.css";

// v5 renames: aliases below map old icon names to the new Figma-aligned names.
// Kept for backward compatibility so consumers can migrate at their own pace.
// Removal target: v6. See MIGRATION-v4-to-v5.md for the full rename table.
import {
  AddCircleIcon,
  AddUserCircleIcon,
  AlertFilledIcon,
  ArtificialIntelligenceIcon,
  BookmarkFilledIcon,
  BookmarkIcon,
  CloseIcon,
  CollapseHideCircleIcon,
  ContextualMenuCircleIcon,
  ExpandShowCircleIcon,
  FailedFilledIcon,
  HelpCircleIcon,
  InfoFilledIcon,
  LockedIcon,
  MoveToNextCircleIcon,
  MoveToPreviousCircleIcon,
  NavigateToNextCircleIcon,
  NavigateToPreviousCircleIcon,
  RemoveUserCircleIcon,
  SubtractCircleIcon,
  SuccessFilledIcon,
  UnlockedIcon,
} from "./build/index";

/** @deprecated Renamed to `AddCircleIcon`. Will be removed in v6. */
export const AddAltIcon = AddCircleIcon;
/** @deprecated Renamed to `AddUserCircleIcon`. Will be removed in v6. */
export const UserAddIcon = AddUserCircleIcon;
/** @deprecated Renamed to `AlertFilledIcon`. Will be removed in v6. */
export const AlertAltIcon = AlertFilledIcon;
/** @deprecated Renamed to `ArtificialIntelligenceIcon`. Will be removed in v6. */
export const AiIcon = ArtificialIntelligenceIcon;
/** @deprecated Renamed to `BookmarkFilledIcon`. Will be removed in v6. */
export const BookmarkCheckedIcon = BookmarkFilledIcon;
/** @deprecated Renamed to `BookmarkIcon`. Will be removed in v6. */
export const BookmarkUncheckedIcon = BookmarkIcon;
/** @deprecated Renamed to `CloseIcon`. Will be removed in v6. */
export const CancelIcon = CloseIcon;
/** @deprecated Renamed to `CollapseHideCircleIcon`. Will be removed in v6. */
export const CollapseHideAltIcon = CollapseHideCircleIcon;
/** @deprecated Renamed to `ContextualMenuCircleIcon`. Will be removed in v6. */
export const ContextualMenuAltIcon = ContextualMenuCircleIcon;
/** @deprecated Renamed to `ExpandShowCircleIcon`. Will be removed in v6. */
export const ExpandShowAltIcon = ExpandShowCircleIcon;
/** @deprecated Renamed to `FailedFilledIcon`. Will be removed in v6. */
export const FailedAltIcon = FailedFilledIcon;
/** @deprecated Renamed to `HelpCircleIcon`. Will be removed in v6. */
export const HelpIcon = HelpCircleIcon;
/** @deprecated Renamed to `InfoFilledIcon`. Will be removed in v6. */
export const InfoAltIcon = InfoFilledIcon;
/** @deprecated Renamed to `LockedIcon`. Will be removed in v6. */
export const LockedClosedIcon = LockedIcon;
/** @deprecated Renamed to `MoveToNextCircleIcon`. Will be removed in v6. */
export const MoveToNextAltIcon = MoveToNextCircleIcon;
/** @deprecated Renamed to `MoveToPreviousCircleIcon`. Will be removed in v6. */
export const MoveToPreviousAltIcon = MoveToPreviousCircleIcon;
/** @deprecated Renamed to `NavigateToNextCircleIcon`. Will be removed in v6. */
export const NavigateToNextAltIcon = NavigateToNextCircleIcon;
/** @deprecated Renamed to `NavigateToPreviousCircleIcon`. Will be removed in v6. */
export const NavigateToPreviousAltIcon = NavigateToPreviousCircleIcon;
/** @deprecated Renamed to `RemoveUserCircleIcon`. Will be removed in v6. */
export const UserRemoveIcon = RemoveUserCircleIcon;
/** @deprecated Renamed to `SubtractCircleIcon`. Will be removed in v6. */
export const SubtractAltIcon = SubtractCircleIcon;
/** @deprecated Renamed to `SuccessFilledIcon`. Will be removed in v6. */
export const SuccessAltIcon = SuccessFilledIcon;
/** @deprecated Renamed to `UnlockedIcon`. Will be removed in v6. */
export const UnlockedOpenIcon = UnlockedIcon;
