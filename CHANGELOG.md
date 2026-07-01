# Changelog

All notable changes to this project are documented in this file.

## [2.0.2] - 2024-12-19

### Fixed

- **Critical recurring event fix**: the Get Events operation now returns actual dates and times for recurring events instead of the original dates.
- Fixed date calculation for DAILY, WEEKLY, MONTHLY, and YEARLY recurrences.
- Preserved the event time while adjusting the date to the requested range.
- Correctly calculates event duration.
- Correctly handles timezones.
- The `dtStart`, `dtEnd`, `dtStartISO`, and `dtEndISO` fields now contain actual occurrence dates.

### Technical Details

- Added `calculateRecurringEventDates()` to calculate actual occurrence dates.
- Added `formatDateToICal()` for correct date formatting.
- Updated recurring event handling in the main Get Events loop.
- Preserved backward compatibility and support for existing functionality.

### Example

**Before the fix:**

- Event: every Monday at 10:00, starting from 2024-01-01.
- Event request for: 2024-01-08.
- Result: `dtStart: 2024-01-01T10:00` (incorrect).

**After the fix:**

- Event: every Monday at 10:00, starting from 2024-01-01.
- Event request for: 2024-01-08.
- Result: `dtStart: 2024-01-08T10:00` (correct).

## [2.0.1] - 2024-12-18

### Fixed

- Fixed linter errors by removing `any` types and replacing them with concrete types.
- Improved error handling by using `NodeOperationError` instead of regular `Error` objects.
- Removed unused variables.
- Improved typing for functions and variables.

### Changed

- Code now follows n8n linting standards.
- Improved compatibility with TypeScript 5.x.

## [2.0.0] - 2024-12-18

### Breaking Changes

- Removed the Update Event operation from the node.
- Updated the node version from 1 to 2.

### Changed

- Simplified node functionality. The node now supports only Get Events, Create Event, and Delete Event.
- Improved performance by removing complex update logic.
- Simplified code structure and reduced package size.

### Rationale

The Update Event operation was removed because it was complex and unstable across CalDAV servers. Use Delete Event followed by Create Event to update events.

## [1.2.1] - 2024-12-18

### Fixed

- Improved Yandex CalDAV handling with special URL handling.
- Added alternative event lookup methods, including direct filename lookup for update/delete flows.
- Improved HTTP 504 timeout handling with fallback methods.
- Fixed event URLs by generating correct `.ics` file paths.

### Changed

- Improved compatibility with different CalDAV servers.
- Added additional event URL checks.

## [1.2.0] - 2024-12-18

### Added

- Create Event operation for adding events to a calendar.
- Update Event operation for updating existing events by UID.
- Delete Event operation for deleting events by UID.
- Improved error handling with detailed messages and HTTP status codes.
- Alternative creation methods for timeout scenarios.
- Automatic UID generation for new events.
- Support for all event fields: title, description, location, start date, and end date.

### Changed

- Improved HTTP request stability for CalDAV servers.
- Added calendar availability checks before operations.
- Updated documentation for all operations.

### Fixed

- Fixed timeout issues (HTTP 504) when creating and updating events.
- Improved handling for different CalDAV server errors.

## [1.1.0] - 2024-12-18

### Added

- AI Tool support. The node can now be used as a tool in AI Agent.
- Added `usableAsTool: true` to the node description.
- Updated documentation with AI Agent usage examples.

### Changed

- Improved compatibility with modern n8n versions.
- Updated README.md with an AI Tool section.

## [1.0.5] - Previous releases

### Functionality

- Dynamic calendar loading via `loadOptionsMethod`.
- Improved calendar names with automatic type detection.
- Proper error handling with `NodeOperationError`.
- Automated tests with mocha.
- TypeScript support and compilation.
- Support for different CalDAV servers, including Google Calendar, iCloud, and NextCloud.
- ISO date formats with timezone support.
