import type { NextPage } from 'next';
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

import acAvatar from '@/avatars/ac.png';
import zolloAvatar from '@/avatars/zollo.png';

const Devs: NextPage = () => {
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
        <ProfileCard
          avatar={{ src: acAvatar.src, alt: "AC" }}
          name="AC0xRPFS001"
          nicknames="AC、chocomint"
          content="HiZollo 的創建者，是專案創始成員之一。目前擔任專案管理團隊、程式團隊以及網管團隊的領導成員。同時也是 HiZollo 開源計畫的發起者之一。"
        >
          <Lead />、<Code />、<Web />
        </ProfileCard>
        <ProfileCard
          avatar={{ src: zolloAvatar.src, alt: "Zollo" }}
          name="Zollo757347"
          nicknames="Zollo、小佐"
          content="HiZollo 專案創始成員之一。目前擔任美術團隊、文案團隊的領導成員，以及程式團隊的成員。同時也是 HiZollo 開源計畫的發起者之一。"
        >
          <Code />、<Art />、<Copy />
        </ProfileCard>
      </Stack>
    </>
  );
}

interface ProfileCardProps {
  children?: ReactNode
  avatar: {
    src: string,
    alt: string
  },
  name: string,
  nicknames: string,
  content: string
}

function ProfileCard(props: ProfileCardProps) {
  const { children, avatar, name, nicknames, content } = props
  const [shadow, setShadow] = useState(3);
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
        image={avatar.src}
        alt={avatar.alt}
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
          所屬團隊：{children}
        </Typography>
      </CardContent>
    </Card>
  )
}

function Lead({ text = "專案領導團隊" }) {
  return <span style={{ color: 'rgb(101, 124, 137)' }}>{text}</span>;
}
function Code({ text = "程式團隊" }) {
  return <span style={{ color: 'rgb(46, 204, 113)' }}>{text}</span>;
}
function Copy({ text = "文案團隊" }) {
  return <span style={{ color: 'rgb(230, 126, 34)' }}>{text}</span>;
}
function Art({ text = "美術團隊" }) {
  return <span style={{ color: 'rgb(233, 30, 99)' }}>{text}</span>;
}
function Web({ text = "網管團隊" }) {
  return <span style={{ color: 'rgb(52, 152, 219)' }}>{text}</span>;
}


export default Devs;
