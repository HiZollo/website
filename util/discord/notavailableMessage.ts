import type { APIMessage } from 'discord-api-types/v10';

export const notAvailableMessage: APIMessage = {
	id: '0',
	type: 1,
	content: '讀取訊息失敗，請重新整理\n如果此現象一直發生，請聯絡開發團隊',
	channel_id: '0',
	author: {
		username: 'Error',
		id: '0',
		discriminator: '4444',
		avatar: 'nevergonnagiveyouup',
		bot: true
	},
	mention_everyone: false,
	mentions: [],
	mention_roles: [],
	timestamp: Date.now().toString(),
	edited_timestamp: null,
	tts: false,
	attachments: [],
	embeds: [],
	pinned: false
}