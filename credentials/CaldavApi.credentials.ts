import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class CaldavApi implements ICredentialType {
	name = 'caldavApi';
	displayName = 'CalDAV API';
	documentationUrl = 'https://tools.ietf.org/html/rfc4791';
	properties: INodeProperties[] = [
		{
			displayName: 'Server URL',
			name: 'serverUrl',
			type: 'string',
			default: '',
			placeholder: 'https://cal.example.com/caldav/',
			description: 'CalDAV server URL',
		},
		{
			displayName: 'Username',
			name: 'username',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'options',
			default: 'basic',
			options: [
				{
					name: 'Basic',
					value: 'basic',
				},
				{
					name: 'Digest',
					value: 'digest',
				},
			],
			description: 'Use Digest for Baikal servers that return WWW-Authenticate: Digest',
		},
	];

} 
