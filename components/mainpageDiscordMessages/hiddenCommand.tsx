import { DiscordMessageWrapper } from '@/components/discordMessageWrapper';
const {
  DiscordMessage
} = require('@discord-message-components/react');

export function HiddenCommandMessages() {
	return (
		<DiscordMessageWrapper>
		  <DiscordMessage profile="zollo">
		    ...
		  </DiscordMessage>
		  <DiscordMessage profile="hizollo">
		    { ~~(Math.random() * 1000) < 6 ? "。。。。。。。" : "......."}
		  </DiscordMessage>
		  <DiscordMessage profile="zollo">
		    吵死了 HiZollo
		  </DiscordMessage>
		  <DiscordMessage profile="hizollo">
		    QAQ
		  </DiscordMessage>
		</DiscordMessageWrapper>
	);
}