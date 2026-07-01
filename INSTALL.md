# Installing CalDAV Node in n8n

## Method 1: Local Installation for Development

1. Copy the `dist` folder to the n8n custom nodes folder:

```bash
cp -r dist ~/.n8n/custom/
```

2. Restart n8n:

```bash
n8n restart
```

3. The CalDAV node will appear in the available nodes list under "Community Nodes".

## Method 2: npm Installation for Production

1. Publish the package to npm:

```bash
npm publish
```

2. In n8n, go to Settings > Community Nodes.
3. Enter `n8n-nodes-caldav`.
4. Click Install.

## Credential Setup

1. In n8n, go to Credentials.
2. Create new credentials of type "CalDAV API".
3. Fill in the fields:
   - **Server URL**: your CalDAV server URL
   - **Username**: your username
   - **Password**: your password
   - **Authentication**: Basic or Digest, depending on your server

## Server Examples

### Google Calendar

- Server URL: `https://apidata.googleusercontent.com/caldav/v2/`
- Calendar URL: `/calendars/your-email@gmail.com/events/`

### NextCloud

- Server URL: `https://your-nextcloud.com/remote.php/dav/`
- Calendar URL: `/calendars/username/personal/`

### Apple iCloud

- Server URL: `https://caldav.icloud.com/`
- Calendar URL: `/calendars/username/`

### Baikal

- Server URL: `https://your-baikal.example.com/dav.php/`
- Authentication: `Digest` if Baikal returns `WWW-Authenticate: Digest`

## Usage

1. Add the CalDAV node to a workflow.
2. Select the created credentials.
3. Select the calendar from the dropdown list.
4. Choose the start and end dates for retrieving events.
5. Run the workflow.

The node returns an array of events with fields such as `uid`, `summary`, `description`, `dtStart`, `dtEnd`, `url`, `etag`, and `calendarData`.
