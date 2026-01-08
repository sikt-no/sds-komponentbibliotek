import { I18nProvider } from "@react-aria/i18n";
import { Button, type ButtonProps } from "@sikt/sds-button";
import { HelpText, Label } from "@sikt/sds-form";
import { useClickOutside, useKeydown } from "@sikt/sds-hooks";
import {
  DateCalendarIcon,
  MoveToPreviousIcon,
  MoveToNextIcon,
  CancelIcon,
} from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import {
  ReactNode,
  forwardRef,
  useId,
  useRef,
  useState,
  useContext,
  MouseEvent as ReactMouseEvent,
  KeyboardEvent as ReactKeyboardEvent,
} from "react";
import {
  type DateRangePickerProps,
  RangeCalendar,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DateSegment,
  DateValue,
  Group,
  Heading,
  Button as ReactAriaButton,
  DateRangePicker as ReactAriaDatePicker,
  Label as ReactAriaLabel,
  Text,
  DateRangePickerStateContext,
} from "react-aria-components";
import "./input-datepicker.pcss";

interface InputDaterangepickerBaseProps extends Omit<
  DateRangePickerProps<DateValue>,
  "aria-label" | "aria-labelledby"
> {
  errorText?: ReactNode;
  helpText?: ReactNode;
  className?: string;
  nextMonthLabel?: string;
  previousMonthLabel?: string;
  openCalendarLabel?: ReactNode;
  lang?: string;
  value?: {
    start: DateValue;
    end: DateValue;
  };
  onChange?: (
    dates: {
      start: DateValue | null;
      end: DateValue | null;
    } | null,
  ) => void;
  clearActionProps?: ClearActionProps;
}

export type InputDaterangepickerProps = InputDaterangepickerBaseProps &
  (
    | {
        label: NonNullable<ReactNode>;
        "aria-labelledby"?: never;
      }
    | {
        label?: never;
        /**
         * Id (or id's) that identifies the element (or elements) that labels the element it is applied to. For accessibility these should NOT be visually hidden.
         */
        "aria-labelledby": string;
      }
  );

export type ClearActionProps = Pick<
  ButtonProps,
  "onClick" | "aria-label" | "type"
>;

export const ClearButton = (clearActionProps?: ClearActionProps) => {
  const state = useContext(DateRangePickerStateContext);

  const handleClearClick = (event: ReactMouseEvent<HTMLButtonElement>) => {
    if (clearActionProps?.onClick) {
      clearActionProps.onClick(event);
    }

    state?.setValue(null);
  };

  const handleClearKeydown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (event.key === " " || event.key === "Enter") {
      handleClearClick(event as unknown as ReactMouseEvent<HTMLButtonElement>);
    }
  };

  if (!state || state.value.start || state.value.end) {
    return (
      <Button
        size="small"
        variant="transparent"
        iconVariant="only"
        className="sds-input__clear"
        onClick={handleClearClick}
        onKeyDown={handleClearKeydown}
        icon={<CancelIcon />}
        aria-label={clearActionProps?.["aria-label"] ?? "Tøm datofelt"}
        type={clearActionProps?.type ?? "button"}
      />
    );
  }
};

export const InputDaterangepicker = forwardRef<
  HTMLDivElement,
  InputDaterangepickerProps
>(
  (
    {
      label,
      "aria-labelledby": ariaLabelledBy,
      errorText,
      helpText,
      className,
      nextMonthLabel = "Neste måned",
      previousMonthLabel = "Forrige måned",
      openCalendarLabel = "Åpne kalender",
      lang = "nb-NO",
      value,
      clearActionProps,
      ...rest
    },
    ref,
  ) => {
    const calendarRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLDivElement>(null);
    const id = useId();
    const errorTextId = `${id}-error-text`;
    const helpTextId = `${id}-help-text`;
    const [calendarOpen, setCalendarOpen] = useState(false);

    const ariaDescribedBy =
      [errorText && errorTextId, helpText && helpTextId]
        .filter(Boolean)
        .join(" ") || undefined;

    const handleEscapeKeydown = () => {
      setCalendarOpen(false);
      (inputRef.current?.firstChild as HTMLElement).focus();
    };

    const handleClickOutside = () => {
      setCalendarOpen(false);
    };

    useClickOutside(calendarRef, handleClickOutside);
    useKeydown(calendarRef, "Escape", handleEscapeKeydown);

    return (
      <I18nProvider locale={lang}>
        <ReactAriaDatePicker
          shouldForceLeadingZeros
          ref={ref}
          value={value}
          isInvalid={Boolean(errorText)}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
          aria-errormessage={errorText ? errorTextId : undefined}
          className={clsx(
            "sds-input",
            errorText && "sds-input--error",
            "sds-input-datepicker",
            className,
          )}
          {...rest}
        >
          {label !== undefined && (
            <ReactAriaLabel>
              <Label text={label} error={Boolean(errorText)} htmlFor={id} />
            </ReactAriaLabel>
          )}
          <Group className="sds-input__wrapper sds-input-datepicker__wrapper">
            <DateInput
              ref={inputRef}
              className="sds-input-datepicker__input"
              slot="start"
            >
              {(segment) => (
                <DateSegment
                  className="sds-input-datepicker__input-segment"
                  segment={segment}
                />
              )}
            </DateInput>
            <span
              className="sds-input-datepicker__separator"
              aria-hidden="true"
            >
              –
            </span>
            <DateInput
              className="sds-input-datepicker__input sds-input-datepicker__input--end"
              slot="end"
            >
              {(segment) => (
                <DateSegment
                  className="sds-input-datepicker__input-segment"
                  segment={segment}
                />
              )}
            </DateInput>
            {clearActionProps && (
              <ClearButton
                {...clearActionProps}
                onClick={(event) => {
                  if (clearActionProps.onClick) {
                    clearActionProps.onClick(event);
                  }

                  (inputRef.current?.firstChild as HTMLElement).focus();
                }}
              />
            )}
            <Button
              variant={errorText ? "critical" : "transparent"}
              size="small"
              onClick={() => {
                setCalendarOpen(!calendarOpen);
              }}
              onKeyDown={(event) => {
                if (event.key === " " || event.key === "Enter") {
                  setCalendarOpen(!calendarOpen);
                }
              }}
              iconVariant="only"
              icon={<DateCalendarIcon />}
              type="button"
            >
              {openCalendarLabel}
            </Button>
          </Group>

          {helpText && (
            <Text slot="description">
              <HelpText id={helpTextId}>{helpText}</HelpText>
            </Text>
          )}
          {errorText && (
            <Text slot="errorMessage">
              <HelpText id={helpTextId} error>
                {errorText}
              </HelpText>
            </Text>
          )}

          {calendarOpen && (
            <RangeCalendar
              ref={calendarRef}
              onChange={() => {
                setCalendarOpen(false);
                (inputRef.current?.firstChild as HTMLElement).focus();
              }}
              data-testid="test-calendar"
              className="sds-input-datepicker__calendar"
            >
              <header className="sds-input-datepicker__calendar-header">
                <ReactAriaButton
                  className="sds-input-datepicker__calendar-button"
                  slot="previous"
                  aria-label={previousMonthLabel}
                >
                  <MoveToPreviousIcon />
                </ReactAriaButton>
                <Heading className="sds-input-datepicker__calendar-heading" />
                <ReactAriaButton
                  className="sds-input-datepicker__calendar-button"
                  slot="next"
                  aria-label={nextMonthLabel}
                >
                  <MoveToNextIcon />
                </ReactAriaButton>
              </header>
              <CalendarGrid weekdayStyle="short">
                {(date) => (
                  <CalendarCell
                    className="sds-input-datepicker__calendar-cell"
                    date={date}
                  />
                )}
              </CalendarGrid>
            </RangeCalendar>
          )}
        </ReactAriaDatePicker>
      </I18nProvider>
    );
  },
);

InputDaterangepicker.displayName = "InputDaterangepicker";
