import { DiscordMessageWrapper } from '@/components/discordMessageWrapper';
const {
  DiscordMessage,
} = require('@discord-message-components/react');

import hizolloAvatar from '@/avatars/hizollo.png';
import acAvatar from '@/avatars/ac.png';
import zolloAvatar from '@/avatars/zollo.png';
import chocomintAvatar from '@/avatars/chocomint.png';
import weeeeeee from '@/avatars/weeeeeee.png';

export function NetworkFunction() {
  return (
    <DiscordMessageWrapper>
      <DiscordMessage author="chocomint#1489" avatar={chocomintAvatar.src} bot={true}>
      這是哪裡？<br />我怎麼變成機器人
      </DiscordMessage>
      <DiscordMessage author="AC0xRPFS001#5007" avatar={acAvatar.src} bot={true}>
      一個神秘且不受空間隔閡的跨次元空間<br />你在這裡發言的同時，會有靈魂抽取裝置將你的靈魂汲取出來，放入機器中克隆數份，並傳至其他次元<br />所以其他地方就會看到你，你也會看到其他地方的人<br />這也是為什麼你會變機器人
      </DiscordMessage>
      <DiscordMessage author="Zollo757347#3987" avatar={zolloAvatar.src} bot={true}>
      樓上廢話好多喔<br />就是跨群聊天室
      </DiscordMessage>
      <DiscordMessage author="AC0xRPFS001#5007" avatar={acAvatar.src} bot={true}>
      🛐
      </DiscordMessage>
      <DiscordMessage author="dQw4w9WgXcQ#9487" avatar={weeeeeee.src} bot={true}>
      🛐
      </DiscordMessage>
      <DiscordMessage author="chocomint#1489" avatar={chocomintAvatar.src} bot={true}>
      🛐
      </DiscordMessage>
    </DiscordMessageWrapper>
  )
}