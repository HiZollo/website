import { DiscordMessageWrapper } from '@/components/discordMessageWrapper';
const {
  DiscordMessage,
  DiscordMention,
  DiscordButtons,
  DiscordButton,
  DiscordMarkdown,
  DiscordInteraction,
  DiscordEmbed,
  DiscordEmbedField
} = require('@discord-message-components/react');

import hizolloAvatar from '@/avatars/hizollo.png'

export function GamesFunction() {
  return (
    <DiscordMessageWrapper>
      <DiscordMessage profile="hizollo" edited>
        <div slot="interactions">
          <DiscordInteraction profile="ac" command={true}>tictactoe</DiscordInteraction>
        </div>
        <div slot="actions">
          <DiscordButtons>
            <DiscordButton disabled></DiscordButton>
            <DiscordButton disabled></DiscordButton>
            <DiscordButton disabled>❌</DiscordButton>
          </DiscordButtons>
          <DiscordButtons>
            <DiscordButton disabled></DiscordButton>
            <DiscordButton disabled>❌</DiscordButton>
            <DiscordButton disabled>⭕️</DiscordButton>
          </DiscordButtons>
          <DiscordButtons>
            <DiscordButton disabled>❌</DiscordButton>
            <DiscordButton disabled>⭕️</DiscordButton>
            <DiscordButton disabled>⭕️</DiscordButton>
          </DiscordButtons>
          <DiscordButtons>
            <DiscordButton type="danger" disabled>停止遊戲</DiscordButton>
          </DiscordButtons>
        </div>
      </DiscordMessage>
      <DiscordMessage profile="hizollo">
      <div slot="interactions">
        <DiscordInteraction profile="hizollo" reply edited></DiscordInteraction>
      </div>
      恭喜 <DiscordMention profile="zollo" /> 贏得了這場圈圈叉叉！
      <DiscordEmbed
          slot = "embeds"
          authorIcon = {hizolloAvatar.src}
          authorName = "遊戲數據 - 圈圈叉叉"
          borderColor = "#000000"
        >
          總花費時間：0:44<br />
          總下棋次數：6
          <DiscordEmbedField fieldTitle="AC0xRPFS001">
          花費時間：0:30<br />下棋次數：3
          </DiscordEmbedField>
          <DiscordEmbedField fieldTitle="Zollo757347">
          花費時間：0:14<br />下棋次數：3
          </DiscordEmbedField>
        </DiscordEmbed>
      </DiscordMessage>
      <DiscordMessage profile="zollo">
        <DiscordMention profile="ac" /> 你好爛
      </DiscordMessage>
    </DiscordMessageWrapper>
  )
}