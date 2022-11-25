import { APIGuildMember } from 'discord-api-types/v10';
import { sendDiscordAPIRequest } from './sendRequest';

async function getFullGuildMemberList(guildId: string): Promise<Array<APIGuildMember>> {
  let member_list: Array<APIGuildMember> = [];
  let all_member_get = false;
  let lastMember: string | null = null;

  while(!all_member_get) {
    const after = lastMember ? `&after=${lastMember}` : '';
    const fetched_list  = JSON.parse(await sendDiscordAPIRequest({
      path: `/api/v10/guilds/${guildId}/members?limit=1000${after}`,
      token: process.env.TOKEN!
    })) as Array<APIGuildMember>;

    member_list = member_list.concat(fetched_list);
    lastMember = fetched_list[fetched_list.length - 1].user!.id;
    all_member_get = fetched_list.length < 1000;
  }

  return member_list;
}

export { getFullGuildMemberList }
