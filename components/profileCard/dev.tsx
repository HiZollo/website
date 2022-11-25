import { useState } from 'react';
import {
  Card, CardMedia, CardContent, Typography 
} from '@mui/material';

interface DevProfileCardProps {
  avatar: string,
  name: string,
  nicknames: string,
  content: string,
  team: number
}

function DevProfileCard(props: DevProfileCardProps) {
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

export { DevProfileCard, Lead, Code, Copy, Art, Web }
