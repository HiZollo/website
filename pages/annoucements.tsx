import type { NextPage, GetServerSideProps } from 'next';
import type { ReactNode } from 'react';
import Header from '../components/head';
const {
  DiscordMessage,
  DiscordMessages,
  DiscordMention,
  DiscordEmbed,
  DiscordButtons,
  DiscordButton,
  DiscordMarkdown,
  DiscordOptionsContext,
  DiscordDefaultOptions,
  DiscordInteraction
} = require('@discord-message-components/react');
import '@discord-message-components/react/styles';
import { notAvailableMessage } from '../util/discord/notavailableMessage';
import type { APIMessage } from 'discord-api-types/v10';
import { sendDiscordAPIRequest, RequestMethod } from '../util/discord/sendRequest';

interface AnnoucementsProps {
  messages: Array<APIMessage>
}

const Annoucements: NextPage<AnnoucementsProps> = ({ messages }: AnnoucementsProps) => {
  return (
    <>
      <Header
        title="最新公告"
        description="你可以在這裡可以同步看到 HiZollo 官方在支援伺服器中發佈的公告"
      />
      <h1>最近官方公告</h1>
      <DiscordMessages>
      {
        messages.map((message, index) => {
          let content = message.content
            .replace(/(@everyone)|(<@!?(\d+)>)/g, (match, everyone, _, id) => {
              if (everyone) return '@everyone';

              const user = message.mentions.find(u => u.id === id);
              return user ? `@${user.username}` : `@${id}`;
            })
            .replace(/<#(\d+)>/g, '\\<#$1\\>')

          const parsedContent: Array<string|ReactNode> = [];

          const regex = new RegExp(
            `(?:@everyone)${message.mentions.length ? '|' : ''}` +
            message.mentions
              .map(user => `(?:@${user.username})`)
              .join('|'), 
            'g'
          )
          const mentions = content.match(regex);
          if (!mentions) parsedContent.push(content);
          else {
            const splittedContent = content.split(regex);
            for (const mention of mentions) {
              parsedContent.push(splittedContent.shift() ?? '')
              parsedContent.push(<DiscordMention>{mention.slice(1)}</DiscordMention>)
            }
            parsedContent.push(splittedContent.shift())
          }
          return (
            <DiscordMessage 
              author={message.author.username}
              bot={message.author.bot}
              avatar={
                message.author.id !== '0'
                  ? `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.webp`
                  : `https://cdn.discordapp.com/embed/avatars/${message.author.discriminator as unknown as number % 5}.png`
              }
              timestamp={message.timestamp}
              key={index}
            >
              <DiscordMarkdown>
                {
                  parsedContent
                }
              </DiscordMarkdown>
            </DiscordMessage>
          )
        })
      }
      </DiscordMessages>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    'Cache-Control',
    `public, s-maxage=${60 * 5}, stale-while-revalidate=${60 * 10}`
  );

  if (!process.env.TOKEN) return { props: { messages: [notAvailableMessage] } };

  try {
    const response = await sendDiscordAPIRequest({
      path: '/api/v10/channels/793146488933842954/messages',
      token: process.env.TOKEN!
    });

    const messages = JSON.parse(response);

    return {
      props: { messages: messages.filter(crossposted).slice(0, 10) }
    }
  } catch(err) {
    console.error("Cannot fetch discord data due to the following reason: ");
    console.error(err);

    return {
      props: { messages: [notAvailableMessage] }
    }
  }
}

function crossposted(message: APIMessage) { return message.flags && message.flags & 1 }

export default Annoucements;
