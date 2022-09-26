import { APIUser } from 'discord-api-types/v10';

interface ImageURLOptions {
	dynamic?: boolean;
	extension?: string;
	size?: number;
}

export function resolveDiscordAvatarURL(user: APIUser, options: ImageURLOptions = {}) {
	const d = options.dynamic ?? true;
	const e = options.extension ?? 'webp';
	const s = options.size;

	let avatarUrl: string = '';
  if (user.avatar) {
  	let extension: string = '';

  	if (!d) extension = e;
  	else if (user.avatar.startsWith('a_')) extension = 'gif';
  	else extension = e;

  	const query = s ? `?size=${s}` : '';
    avatarUrl = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${e}${query}`;
  } else {
    avatarUrl = `https://cdn.discordapp.com/embed/avatars/${+user.discriminator % 5}.png`
  }

  return avatarUrl;
}