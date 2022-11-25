import type { NextPage, GetStaticProps } from 'next';
import { ReactNode, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography
} from '@mui/material';
import data from '@/data/devdata.json';

import { sendDiscordAPIRequest } from '@/util/discord/sendRequest';
import { getFullGuildMemberList } from '@/util/discord/getFullGuildMemberList';
import { resolveDiscordAvatarURL } from '@/util/discord/resolveAvatarURL';
import { APIGuildMember } from 'discord-api-types/v10';

import { DevProfileCard } from '@/components/profileCard/dev';
import { ContrubutorProfileCard } from '@/components/profileCard/contributor';

import acAvatar from '@/avatars/ac.png';
import zolloAvatar from '@/avatars/zollo.png';

interface id2Value {
  [key: string]: string
}

interface DataHolder {
  name: id2Value,
  avatar: id2Value
}

interface DevsProps {
  devs: DataHolder,
  contributors: DataHolder & { ids: string[], nickname: id2Value }
}

const Devs: NextPage<DevsProps> = ({ devs, contributors }: DevsProps) => {
  return (
    <>
      <CardCategoryTitle>
        HiZollo 開發團隊
      </CardCategoryTitle>
      <Typography component="div" textAlign={{ xs: "center", md: "inherit" }}>
        這裡列出的是 HiZollo 開發團隊的成員。
      </Typography>
      <CardStack>
        {data.members.map(member => 
          <DevProfileCard
            key={devs.name[member.id]}
            avatar={devs.avatar[member.id]}
            name={devs.name[member.id]}
            nicknames={member.nicknames.join("、")}
            content={member.bio}
            team={member.team}
          />
        )}
      </CardStack>
      <CardCategoryTitle>
        HiZollo 貢獻者
      </CardCategoryTitle>
      <Typography component="div" textAlign={{ xs: "center", md: "inherit" }}>
        <p>這裡列出的是在 HiZollo 官方伺服器中，有為 HiZollo 做出貢獻的人。</p>
        <p>他們不是開發團隊的人，但他們對 HiZollo 的發展也有著不可忽略的貢獻。</p>
      </Typography>
      <CardStack>
        {contributors.ids.map(id => 
          <ContrubutorProfileCard
            key={id}
            avatar={contributors.avatar[id]}
            name={contributors.name[id]}
            nickname={contributors.nickname[id]}
          />
        )}
      </CardStack>
    </>
  );
}

interface LayoutProps {
  children: ReactNode
}

function CardCategoryTitle({ children }: LayoutProps) {
  return (
    <Box
      component="h1"
      textAlign={{ xs: "center", md: "left" }}
    >{children}</Box>
  );
}

function CardStack({ children }: LayoutProps) {
   return (
      <Stack
        direction="row"
        mt={3}
        justifyContent={{ xs: "center", md: "inherit" }}
        sx={{ flexWrap: 'wrap', gap: '20px' }}
      >{children}</Stack>
    );
}
  
export const getStaticProps: GetStaticProps = async () => {
  const info = (await Promise.all(
    data.members.map(member => {
      return sendDiscordAPIRequest({
        path: `/api/v10/users/${member.id}`,
        token: process.env.TOKEN!
      })
    }))
  ).map(d => JSON.parse(d));

  const devs: DataHolder = { name: {}, avatar: {} }

  for (let i = 0; i < data.members.length; ++i) {
    const now_id = data.members[i].id;
    devs.name[now_id] = info[i].username;
    devs.avatar[now_id] = resolveDiscordAvatarURL(info[i], { extension: 'png', size: 4096 });
  }

  const member_list = await getFullGuildMemberList('572733182412193792');

  const contributor_list = member_list.filter(member => member.roles.includes("1044239646231642183"))

  const contributors: DataHolder & { ids: string[], nickname: id2Value } = {
    name: {}, avatar: {}, nickname: {}, ids: []
  };

  for (let i = 0; i < contributor_list.length; ++i) {
    const now_id = contributor_list[i].user!.id;
    contributors.ids.push(now_id);
    contributors.name[now_id] = contributor_list[i].user!.username;
    contributors.avatar[now_id] = resolveDiscordAvatarURL(
      contributor_list[i].user!,
      { extension: 'png', size: 4096 }
    );
    contributors.nickname[now_id] = contributor_list[i].nick ?? '';
  }

  return {
    props: {
      devs, contributors
    },
    revalidate: 600
  }
}

export default Devs;
