import { DiscordMessageWrapper } from '@/components/discordMessageWrapper';
const {
  DiscordMessage,
  DiscordMention
} = require('@discord-message-components/react');

export function BasicFunction() {
  return (
    <DiscordMessageWrapper>
      <DiscordMessage profile="zollo">
        z!8ball 我是不是大佬
      </DiscordMessage>
      <DiscordMessage profile="hizollo">
        <DiscordMention profile="zollo" />，我想是的
      </DiscordMessage>
      <DiscordMessage profile="ac">
        z!8ball 那我呢
      </DiscordMessage>
      <DiscordMessage profile="hizollo">
        <DiscordMention profile="ac" />，不
      </DiscordMessage>
    </DiscordMessageWrapper>
  );
}