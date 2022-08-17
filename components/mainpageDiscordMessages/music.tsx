import { DiscordMessageWrapper } from '@/components/discordMessageWrapper';
const {
  DiscordMessage,
  DiscordMarkdown,
  DiscordEmbed,
  DiscordButtons,
  DiscordButton,
  DiscordInteraction
} = require('@discord-message-components/react');

import hizolloAvatar from '@/avatars/hizollo.png';
import chocomintAvatar from '@/avatars/chocomint.png';

export function MusicFunction() {
  return (
    <DiscordMessageWrapper>
      <DiscordMessage profile="chocomint">
      z!p <a href="https://www.youtube.com/watch?v=TZC02UdbStM">https://www.youtube.com/watch?v=TZC02UdbStM</a>
      </DiscordMessage>
      <DiscordMessage profile="hizollo">
        <DiscordEmbed
          authorIcon = {hizolloAvatar.src}
          authorName = "HiZollo 的音樂中心"
          borderColor = "#94B4FA"
        >
          <DiscordMarkdown>
            已加入 `聽歌`
          </DiscordMarkdown>
        </DiscordEmbed>
        <DiscordEmbed
          slot = "embeds"
          authorIcon = {hizolloAvatar.src}
          authorName = "HiZollo 的音樂中心"
          borderColor = "#94B4FA"
          thumbnail = "https://i.ytimg.com/vi_webp/TZC02UdbStM/maxresdefault.webp"
          footerIcon = {chocomintAvatar.src}
        >
          目前正在播放： <a href="https://www.youtube.com/watch?v=TZC02UdbStM">群青 / YOASOBI【Covered by Kotoha】</a>
          <div slot="footer">由 chocomint 指定的樂曲</div>
        </DiscordEmbed>
        <div slot="actions">
          <DiscordButtons>
            <DiscordButton>暫停</DiscordButton>
            <DiscordButton disabled>繼續</DiscordButton>
            <DiscordButton type="secondary">正常播放</DiscordButton>
            <DiscordButton type="danger">跳過</DiscordButton>
          </DiscordButtons>
          <DiscordButtons>
            <DiscordButton type="success">詳細資訊</DiscordButton>
          </DiscordButtons>
        </div>
      </DiscordMessage>
    </DiscordMessageWrapper>
  )
}