import { useState } from 'react';
import {
  Card, CardMedia, CardContent, Typography
} from '@mui/material';

interface ContrubutorProfileCardProps {
  name: string,
  nickname: string,
  avatar: string
}

function ContrubutorProfileCard({ name, nickname, avatar }: ContrubutorProfileCardProps) {
  const [shadow, setShadow] = useState(3)
  return (
    <Card
      sx={{ maxWidth: 330, minWidth: 230 }}
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
       <Typography sx={{ mb: '0px' }} gutterBottom variant="h5" component="div">
         {name}
       </Typography>
       <Typography sx={{ my: '20px' }} color="text.secondary" variant="h6" component="div">
         {nickname ||  "\u200b"}
       </Typography>
       </CardContent>
       <CardContent>
         身份：<ContributorBadge />
       </CardContent>
    </Card>
  )
}

function ContributorBadge({ text="HiZollo 貢獻者" }) {
  return <span style={{ color: 'rgb(120, 79, 146)', whiteSpace: 'nowrap' }}>{text}</span>
}

export { ContrubutorProfileCard, ContributorBadge }
