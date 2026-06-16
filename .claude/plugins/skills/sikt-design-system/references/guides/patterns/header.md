# Header pattern

When to use and how to structure content inside `Header` from `@sikt/sds-header`.

## Purpose

The header provides shared layout and navigation. It intentionally stays simple — subcomponents fill the slots as needed rather than one complex component handling every case.

## Column placement

| Column | Put here                                                 |
| ------ | -------------------------------------------------------- |
| Left   | Product logo, primary navigation                         |
| Center | Simple navigation (2–3 links max)                        |
| Right  | Search, language selection, notifications, login/profile |

## Content guidelines

**Good fits:**

- Product logo (should link to the homepage or dashboard)
- Primary navigation — direct links or a menu trigger
- Search
- Login link or user profile display
- Language selection (2–3 options max; more alternatives need a different solution)
- Notifications

**Poor fits:**

- Non-clickable/decorative content

## Key conventions

**Logo links home.** Clicking the logo to return to the start page is a firmly established web convention — always wire it up.

**Search expands leftward.** Place search toward the center so it can expand left without displacing other content.

**Language selector threshold.** If there are significantly more than 3 language options, reconsider placing the selector in the header — a dedicated page or footer link is more appropriate.
