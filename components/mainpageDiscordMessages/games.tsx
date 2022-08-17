import { DiscordMessageWrapper } from '@/components/discordMessageWrapper';
const {
  DiscordMessage,
  DiscordMention,
  DiscordButtons,
  DiscordButton,
  DiscordMarkdown,
  DiscordInteraction
} = require('@discord-message-components/react');

export function GamesFunction() {
  return (
    <DiscordMessageWrapper>
      <DiscordMessage profile="hizollo" edited>
        <div slot="interactions">
          <DiscordInteraction profile="ac" command={true}>tictactoe</DiscordInteraction>
        </div>
        <div slot="actions">
          <DiscordButtons>
            <DiscordButton disabled>❌</DiscordButton>
            <DiscordButton disabled>⭕️</DiscordButton>
            <DiscordButton disabled></DiscordButton>
          </DiscordButtons>
          <DiscordButtons>
            <DiscordButton disabled>⭕️</DiscordButton>
            <DiscordButton disabled>❌</DiscordButton>
            <DiscordButton disabled></DiscordButton>
          </DiscordButtons>
          <DiscordButtons>
            <DiscordButton disabled>⭕️</DiscordButton>
            <DiscordButton disabled>❌</DiscordButton>
            <DiscordButton disabled>❌</DiscordButton>
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
      <DiscordMarkdown>
        恭喜 <DiscordMention profile="zollo" />（符號 ❌）獲勝！<br />
        **遊玩時間**：1 分 8 秒<br />
        **下棋次數**：<br />
        　<DiscordMention profile="zollo" />：4 步<br />
        　<DiscordMention profile="ac" />：3 步
      </DiscordMarkdown>
      </DiscordMessage>
      <DiscordMessage profile="zollo">
        <DiscordMention profile="ac" /> 你好爛
      </DiscordMessage>
    </DiscordMessageWrapper>
  )
}