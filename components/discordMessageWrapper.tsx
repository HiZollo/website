const {
  DiscordMessages,
  DiscordOptionsContext,
  DiscordDefaultOptions,
} = require('@discord-message-components/react');
import '@discord-message-components/react/styles';

import hizolloAvatar from '@/avatars/hizollo.png';
import acAvatar from '@/avatars/ac.png';
import zolloAvatar from '@/avatars/zollo.png';
import chocomintAvatar from '@/avatars/chocomint.png';
import weeeeeee from '@/avatars/weeeeeee.png';

interface DiscordMessageWrapperProps {
  children?: React.ReactNode
}

const discordOptions = {
	...DiscordDefaultOptions,
	profiles: {
		hizollo: {
			author: 'Junior HiZollo',
			avatar: hizolloAvatar.src,
      roleColor: "#E3D547",
      bot: true
		},
    ac: {
      author: 'AC0xRPFS001',
      avatar: acAvatar.src,
      roleColor: "#657C89"
    },
    zollo: {
      author: 'Zollo757347',
      avatar: zolloAvatar.src,
      roleColor: "#65C87A"
    },
    chocomint: {
      author: 'chocomint',
      avatar: chocomintAvatar.src,
      roleColor: "#E3F0F7"
    }
	},
}

export function DiscordMessageWrapper(props: DiscordMessageWrapperProps) {
  return (
    <DiscordOptionsContext.Provider value={discordOptions}>
      <DiscordMessages>
        {props.children}
      </DiscordMessages>
    </DiscordOptionsContext.Provider>
  )
}