import { Fieldset } from "@sikt/sds-form";
import { ArchiveIcon, AttachmentIcon } from "@sikt/sds-icons";
import { RadioFieldset } from "@sikt/sds-radio";
import { ChangeEvent, useState } from "react";
import * as React from "react";
import {
  FilterList,
  FilterListItem,
  FilterListCategory,
  FilterListSection,
} from "../index";

import "@sikt/sds-form/dist/index.css";
import "@sikt/sds-radio/dist/index.css";
import "@sikt/sds-badge/dist/index.css";
import "@sikt/sds-checkbox/dist/index.css";

const meta = {
  title: "Components/FilterList",
  component: FilterList,
};

export default meta;

export const ItemWithCheckbox: { render: () => React.JSX.Element } = {
  render: () => {
    const [hasGoodGrades, setHasGoodGrades] = useState<boolean>(false);
    const [hasBadGrades, setHasBadGrades] = useState<boolean>(true);

    const handleGradeChange = (event: ChangeEvent<HTMLInputElement>) => {
      if ("hasGoodGrades" === event.target.value)
        setHasGoodGrades(!hasGoodGrades);
      if ("hasBadGrades" === event.target.value) setHasBadGrades(!hasBadGrades);
    };

    return (
      <FilterList key={0} className="sds-filter-list-max-width">
        <Fieldset
          legend={
            <legend className="sds-screen-reader-only">Grade-filters</legend>
          }
        >
          <FilterListItem
            type="checkbox"
            label="Has good grades"
            value="hasGoodGrades"
            checked={hasGoodGrades}
            onChange={handleGradeChange}
            count={3}
          />
          <FilterListItem
            type="checkbox"
            label="Has bad grades"
            value="hasBadGrades"
            checked={hasBadGrades}
            onChange={handleGradeChange}
            count={33}
          />
        </Fieldset>
      </FilterList>
    );
  },
};

export const ItemWithRadio: { render: () => React.JSX.Element } = {
  render: () => {
    const [country, setCountry] = useState<string>("norway");
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setCountry(event.target.value);
    };

    return (
      <FilterList key={0} className="sds-filter-list-max-width">
        <RadioFieldset
          value={country}
          onChange={handleChange}
          legend={<legend className="sds-screen-reader-only">Countries</legend>}
        >
          <FilterListItem
            type="radio"
            label="Norway"
            value="norway"
            count={10}
          />
          <FilterListItem
            type="radio"
            label="Denmark"
            value="denmark"
            count={14}
          />
          <FilterListItem
            type="radio"
            label="Sweden"
            value="sweden"
            count={0}
          />
        </RadioFieldset>
      </FilterList>
    );
  },
};

export const SectionExample: { render: () => React.JSX.Element } = {
  render: () => {
    const [hasGoodGrades, setHasGoodGrades] = useState<boolean>(true);
    const [hasBadGrades, setHasBadGrades] = useState<boolean>(true);

    const getCount = () => {
      return (hasGoodGrades ? 1 : 0) + (hasBadGrades ? 1 : 0);
    };

    const handleGradeChange = (event: ChangeEvent<HTMLInputElement>) => {
      if ("hasGoodGrades" === event.target.value)
        setHasGoodGrades(!hasGoodGrades);
      if ("hasBadGrades" === event.target.value) setHasBadGrades(!hasBadGrades);
    };

    return (
      <FilterList key={0} className="sds-filter-list-max-width">
        <FilterListSection label="Not expandable section">
          <Fieldset
            legend={
              <legend className="sds-screen-reader-only">
                Not expandable section
              </legend>
            }
          >
            <FilterListItem
              type="checkbox"
              label="checkbox 1"
              value="dummyItem1"
              checked={false}
            />
            <FilterListItem
              type="checkbox"
              label="checkbox 2"
              value="dummyItem2"
              checked={false}
            />
          </Fieldset>
        </FilterListSection>

        <FilterListSection
          label="Expandable section"
          expandable={{
            expanded: true,
          }}
          count={getCount()}
        >
          <Fieldset
            legend={
              <legend className="sds-screen-reader-only">
                Expandable section
              </legend>
            }
          >
            <FilterListItem
              type="checkbox"
              label="Has good grades"
              value="hasGoodGrades"
              checked={hasGoodGrades}
              onChange={handleGradeChange}
              count={3}
            />
            <FilterListItem
              type="checkbox"
              label="Has bad grades"
              value="hasBadGrades"
              checked={hasBadGrades}
              onChange={handleGradeChange}
              count={33}
            />
          </Fieldset>
        </FilterListSection>
      </FilterList>
    );
  },
};

export const CategoryExample: {
  render: () => React.JSX.Element;
} = {
  render: () => {
    const [hasGoodGrades, setHasGoodGrades] = useState<boolean>(true);
    const [hasBadGrades, setHasBadGrades] = useState<boolean>(true);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const getIsAllOn = () => hasGoodGrades && hasBadGrades;

    const getIsSomeOn = () =>
      !(hasGoodGrades && hasBadGrades) && (hasGoodGrades || hasBadGrades);

    const getCount = () => {
      return (hasGoodGrades ? 1 : 0) + (hasBadGrades ? 1 : 0);
    };

    const handleGradeChange = (event: ChangeEvent<HTMLInputElement>) => {
      if ("hasGoodGrades" === event.target.value)
        setHasGoodGrades(!hasGoodGrades);
      if ("hasBadGrades" === event.target.value) setHasBadGrades(!hasBadGrades);
    };

    const handleCategoryChange = () => {
      const toggleAllOff = hasGoodGrades && hasBadGrades;
      setHasGoodGrades(!toggleAllOff);
      setHasBadGrades(!toggleAllOff);
    };

    return (
      <FilterList key={0} className="sds-filter-list-max-width">
        <FilterListCategory
          label="Category example"
          onCategoryToggle={handleCategoryChange}
          indeterminate={getIsSomeOn()}
          checked={getIsAllOn()}
          expanded={isExpanded}
          onExpandToggle={setIsExpanded}
          count={getCount()}
        >
          <Fieldset
            legend={
              <legend className="sds-screen-reader-only">
                Category example
              </legend>
            }
          >
            <FilterListItem
              type="checkbox"
              label="Has good grades"
              value="hasGoodGrades"
              checked={hasGoodGrades}
              onChange={handleGradeChange}
              count={3}
            />
            <FilterListItem
              type="checkbox"
              label="Has bad grades"
              value="hasBadGrades"
              checked={hasBadGrades}
              onChange={handleGradeChange}
              count={33}
            />
          </Fieldset>
        </FilterListCategory>
      </FilterList>
    );
  },
};

export const IconAriaLabelExample: { render: () => React.JSX.Element } = {
  render: () => {
    return (
      <FilterList key={0} className="sds-filter-list-max-width">
        <FilterListItem
          type="checkbox"
          label="Item in list"
          value="itemInList"
          icon={<AttachmentIcon />}
        />

        <FilterListCategory
          label="Category in list"
          icon={<ArchiveIcon />}
          indeterminate={false}
          checked={false}
          expanded={false}
        >
          <FilterListItem
            type="checkbox"
            label="Item in category"
            value="itemInCategory"
            icon={<AttachmentIcon />}
          />
        </FilterListCategory>
      </FilterList>
    );
  },
};
