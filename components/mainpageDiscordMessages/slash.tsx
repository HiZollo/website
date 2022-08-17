import { DiscordMessageWrapper } from '@/components/discordMessageWrapper';
const {
  DiscordMessage,
  DiscordMention,
  DiscordEmbed,
  DiscordButtons,
  DiscordButton,
  DiscordInteraction
} = require('@discord-message-components/react');

import acAvatar from '@/avatars/ac.png';

export function SlashFunction() {
  return (
    <DiscordMessageWrapper>
      <DiscordMessage profile="hizollo">
        <div slot="interactions">
          <DiscordInteraction profile="zollo" command={true}>fact</DiscordInteraction>
        </div>
        2001 年 1 月 15 日是維基百科的生日
      </DiscordMessage>
      <DiscordMessage profile={"hizollo"}>
        <div slot="interactions">
          <DiscordInteraction profile="zollo" command={true}>fact</DiscordInteraction>
        </div>
        同一個人在月球上起跳的高度大約是地球上的 6 倍
      </DiscordMessage>
      <DiscordMessage profile="hizollo">
        <div slot="interactions">
          <DiscordInteraction profile="ac" command={true}>confession</DiscordInteraction>
        </div>
        <DiscordEmbed
          slot = "embeds"
          authorIcon = {acAvatar.src}
          authorName = "Love Letter"
          borderColor = "#FF69DD"
        >
        <DiscordMention profile="zollo" />，你收到了來自 <DiscordMention profile="ac">AC0xRPFS001</DiscordMention> 的告白<br /><br />請選擇你的回覆……
        </DiscordEmbed>
        <div slot="actions">
          <DiscordButtons>
            <DiscordButton type="success">❤️ 接受</DiscordButton>
            <DiscordButton type="danger">❌ 拒絕</DiscordButton>
            <DiscordButton type="secondary">👍 發好人卡</DiscordButton>
          </DiscordButtons>
        </div>
      </DiscordMessage>
    </DiscordMessageWrapper>
  )
}