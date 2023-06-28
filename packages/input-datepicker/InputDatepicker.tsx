import React, { useId, forwardRef, useState } from "react";
import clsx from "clsx";
import {
  DatePickerProps,
  DatePicker as ReactAriaDatePicker,
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DateSegment,
  DateValue,
  Group,
  Heading,
  Label as ReactAriaLabel,
  Text,
} from "react-aria-components";
import {
  CalendarBlankIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from "@sikt/sds-icons";
import { Label, HelpText } from "@sikt/sds-form";
import { TertiaryButton } from "@sikt/sds-button";
import "./input-datepicker.pcss";

export interface InputDatepickerProps extends DatePickerProps<DateValue> {
  label: string;
  errorText?: string;
  helpText?: string;
  className?: string;
  nextMonthLabel?: string;
  previousMonthLabel?: string;
  lang?: string;
  value?: DateValue;
  onChange?: (newValue: DateValue) => void;
}

export const InputDatepicker = forwardRef<HTMLDivElement, InputDatepickerProps>(
  (
    {
      label,
      errorText,
      helpText,
      className,
      nextMonthLabel = "Neste måned",
      previousMonthLabel = "Forrige måned",
      value,
      ...rest
    },
    ref
  ) => {
    const id = useId();
    const helpTextId = `${id}-help-text`;
    const [calendarOpen, setCalendarOpen] = useState(false);

    return (
      <ReactAriaDatePicker
        shouldForceLeadingZeros
        ref={ref}
        value={value}
        isInvalid={Boolean(errorText)}
        aria-describedby={helpTextId}
        aria-errormessage={errorText && helpTextId}
        className={clsx(
          "sds-input",
          errorText && "sds-input--error",
          "sds-input-datepicker",
          className
        )}
        {...rest}
      >
        <ReactAriaLabel>
          <Label text={label} error={Boolean(errorText)} htmlFor={id} />
        </ReactAriaLabel>
        <Group className="sds-input__wrapper">
          <DateInput className="sds-input-datepicker__input">
            {(segment) => (
              <DateSegment
                className="sds-input-datepicker__input-segment"
                segment={segment}
              />
            )}
          </DateInput>
          <TertiaryButton
            onClick={() => setCalendarOpen(!calendarOpen)}
            className={clsx(
              errorText ? "sds-input-datepicker__button--error" : null
            )}
            iconType="only"
            icon={
              <CalendarBlankIcon
                className={clsx(
                  "sds-input-datepicker__calendar-icon",
                  errorText && "sds-input-datepicker__calendar-icon--error"
                )}
              />
            }
          >
            Open calendar
          </TertiaryButton>
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
            onChange={() => setCalendarOpen(false)}
            data-testid="test-calendar"
            className="sds-input-datepicker__calendar"
          >
            <header className="sds-input-datepicker__calendar-header">
              <Button
                className="sds-input-datepicker__calendar-button"
                slot="previous"
                aria-label={previousMonthLabel}
              >
                <CaretLeftIcon />
              </Button>
              <Heading className="sds-input-datepicker__calendar-heading sds-typography-strong"></Heading>
              <Button
                className="sds-input-datepicker__calendar-button"
                slot="next"
                aria-label={nextMonthLabel}
              >
                <CaretRightIcon />
              </Button>
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
    );
  }
);

InputDatepicker.displayName = "InputDatepicker";
