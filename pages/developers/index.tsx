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

import { sendDiscordAPIRequest } from '@/util/discord/sendRequest'
import { resolveDiscordAvatarURL } from '@/util/discord/resolveAvatarURL'

import acAvatar from '@/avatars/ac.png';
import zolloAvatar from '@/avatars/zollo.png';

interface id2Value {
  [key: string]: string
}

interface DevsProps {
  name: id2Value,
  avatar: id2Value
}

const Devs: NextPage<DevsProps> = (props: DevsProps) => {
  return (
    <>
      <Box
        component="h1"
        textAlign={{ xs: "center", md: "inherit" }}
      >
        HiZollo 開發團隊
      </Box>
      <Stack
        direction={{xs: "column", sm: "row"}}
        alignItems={{ xs: "center", sm: "inherit" }}
        spacing={2}
        mt={3}
        divider={<Divider color="white" orientation="vertical" flexItem />}
      >
        {data.members.map(member => 
          <ProfileCard
            key={props.name[member.id]}
            avatar={props.avatar[member.id]}
            name={props.name[member.id]}
            nicknames={member.nicknames.join("、")}
            content={member.bio}
            team={member.team}
          />
        )}
      </Stack>
    </>
  );
}

interface ProfileCardProps {
  avatar: string,
  name: string,
  nicknames: string,
  content: string,
  team: number
}

function ProfileCard(props: ProfileCardProps) {
  const { avatar, name, nicknames, content, team } = props;
  const [shadow, setShadow] = useState(3);

  const teamFlag = { lead: 1, code: 2, copy: 4, web: 8, art: 16 };
  const teams: { [key: string]: unknown } = {}
  for (const [flag, bit] of Object.entries(teamFlag)) {
    teams[flag] = ((team & bit) == bit);
  }
  
  const badges = []
  if (teams.lead) { badges.push(<Lead />); badges.push("、"); }
  if (teams.code) { badges.push(<Code />); badges.push("、"); }
  if (teams.copy) { badges.push(<Copy />); badges.push("、"); }
  if (teams.web) { badges.push(<Web />); badges.push("、"); }
  if (teams.art) { badges.push(<Art />); badges.push("、");}
  badges.pop();

  return (
    <Card
      sx={{ maxWidth: 330 }}
      elevation={shadow}
      onMouseEnter={() => setShadow(24)}
      onMouseLeave={() => setShadow(3)}
    >
      <CardMedia
        component="img"
        height="170"
        image={avatar}
        alt={name}
      />
      <CardContent>
        <Typography sx={{ mb: '0px'}} gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" color="text.secondary">
          {nicknames}
        </Typography>
        <Typography sx={{ my: '20px' }} variant="body1" component="div">
          {content}
        </Typography>
        <Typography variant="body2" color="text.primary">
          所屬團隊：{badges}
        </Typography>
      </CardContent>
    </Card>
  )
}

function Lead({ text = "專案領導團隊" }) {
  return <span style={{ color: 'rgb(101, 124, 137)', whiteSpace: 'nowrap' }}>{text}</span>;
}
function Code({ text = "程式團隊" }) {
  return <span style={{ color: 'rgb(46, 204, 113)', whiteSpace: 'nowrap' }}>{text}</span>;
}
function Copy({ text = "文案團隊" }) {
  return <span style={{ color: 'rgb(230, 126, 34)', whiteSpace: 'nowrap' }}>{text}</span>;
}
function Art({ text = "美術團隊" }) {
  return <span style={{ color: 'rgb(233, 30, 99)', whiteSpace: 'nowrap' }}>{text}</span>;
}
function Web({ text = "網管團隊" }) {
  return <span style={{ color: 'rgb(52, 152, 219)', whiteSpace: 'nowrap' }}>{text}</span>;
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

  const r: { name: id2Value, avatar: id2Value } = { name: {}, avatar: {} }

  for (let i = 0; i < data.members.length; ++i) {
    const now_id = data.members[i].id;
    r.name[now_id] = info[i].username;
    r.avatar[now_id] = resolveDiscordAvatarURL(info[i], { extension: 'png', size: 4096 });
  }

  return {
    props: r,
    revalidate: 600
  }
}


export default Devs;
