import { I18nProvider } from "@react-aria/i18n";
import { Button, ButtonProps } from "@sikt/sds-button";
import { HelpText, Label } from "@sikt/sds-form";
import {
  CalendarBlankIcon,
  CaretLeftIcon,
  CaretRightIcon,
  XIcon,
} from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import {
  ReactNode,
  forwardRef,
  useId,
  useRef,
  useState,
  useContext,
  MouseEvent,
} from "react";
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DatePickerProps,
  DateSegment,
  DateValue,
  Group,
  Heading,
  Button as ReactAriaButton,
  DatePicker as ReactAriaDatePicker,
  Label as ReactAriaLabel,
  Text,
  DatePickerStateContext,
} from "react-aria-components";
import { useEventListener, useOnClickOutside } from "usehooks-ts";
import "./input-datepicker.pcss";

interface InputDatepickerBaseProps
  extends Omit<DatePickerProps<DateValue>, "aria-label" | "aria-labelledby"> {
  errorText?: ReactNode;
  helpText?: ReactNode;
  className?: string;
  nextMonthLabel?: string;
  previousMonthLabel?: string;
  openCalendarLabel?: ReactNode;
  lang?: string;
  value?: DateValue;
  onChange?: (newValue: DateValue) => void;
  clearActionProps?: ClearActionProps;
}

type ClearActionProps = Pick<ButtonProps, "onClick" | "aria-label" | "type">;

export type InputDatepickerProps = InputDatepickerBaseProps &
  (
    | {
        label: NonNullable<ReactNode>;
        "aria-labelledby"?: never;
      }
    | {
        label?: never;
        "aria-labelledby": string;
      }
  );

const DatepickerClearButton = (clearActionProps?: ClearActionProps) => {
  const state = useContext(DatePickerStateContext);

  const handleClearClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (clearActionProps?.onClick) {
      clearActionProps.onClick(event);
    }

    state.setValue(null);
  };

  const handleClearKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    if (event.key === " " || event.key === "Enter") {
      handleClearClick(event as unknown as MouseEvent<HTMLButtonElement>);
    }
  };

  if (state.value) {
    return (
      <Button
        size="small"
        variant="transparent"
        iconVariant="only"
        className="sds-input__clear"
        onClick={handleClearClick}
        onKeyUp={handleClearKeyDown}
        icon={<XIcon />}
        aria-label={clearActionProps?.["aria-label"] ?? "Tøm datofelt"}
        type={clearActionProps?.type ?? "button"}
      />
    );
  }
};

export const InputDatepicker = forwardRef<HTMLDivElement, InputDatepickerProps>(
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
    const helpTextId = `${id}-help-text`;
    const [calendarOpen, setCalendarOpen] = useState(false);

    const onEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if ("current" in calendarRef && calendarRef.current) {
          setCalendarOpen(false);
          (inputRef.current?.firstChild as HTMLElement).focus();
        }
      }
    };

    useEventListener("keyup", onEscapeKey, calendarRef);

    const handleClickOutside = () => {
      setCalendarOpen(false);
    };

    useOnClickOutside(calendarRef, handleClickOutside);

    return (
      <I18nProvider locale={lang}>
        <ReactAriaDatePicker
          shouldForceLeadingZeros
          ref={ref}
          value={value}
          isInvalid={Boolean(errorText)}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={helpTextId}
          aria-errormessage={errorText && helpTextId}
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
            <DateInput ref={inputRef} className="sds-input-datepicker__input">
              {(segment) => (
                <DateSegment
                  className="sds-input-datepicker__input-segment"
                  segment={segment}
                />
              )}
            </DateInput>
            {clearActionProps && (
              <DatepickerClearButton
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
              onKeyUp={(event) => {
                if (event.key === " " || event.key === "Enter") {
                  setCalendarOpen(!calendarOpen);
                }
              }}
              iconVariant="only"
              icon={<CalendarBlankIcon />}
              type="button"
            >
              {openCalendarLabel}
            </Button>
          </Group>

          {(errorText ?? helpText) && (
            <Text slot={errorText ? "errorMessage" : "description"}>
              <HelpText id={helpTextId} error={Boolean(errorText)}>
                {errorText ?? helpText}
              </HelpText>
            </Text>
          )}

          {calendarOpen && (
            <Calendar
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
                  <CaretLeftIcon />
                </ReactAriaButton>
                <Heading className="sds-input-datepicker__calendar-heading" />
                <ReactAriaButton
                  className="sds-input-datepicker__calendar-button"
                  slot="next"
                  aria-label={nextMonthLabel}
                >
                  <CaretRightIcon />
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
            </Calendar>
          )}
        </ReactAriaDatePicker>
      </I18nProvider>
    );
  },
);

InputDatepicker.displayName = "InputDatepicker";
