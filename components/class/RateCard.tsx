import { Card, CardHeader, Avatar, CardContent, Typography, Rating } from '@mui/material';

class RateCard {
  private avatar: string = '';
  private name: string = '';
  private comment: string = '';
  private rates: number = -1;
  private id: number = 0;
  private static id: number = 0;
  constructor() { this.id = RateCard.id++; }
  public setAvatar(avatar: string): RateCard {
    this.avatar = avatar;
    return this
  }
  public setName(name: string): RateCard {
    this.name = name;
    return this;
  }
  public setComment(comment: string): RateCard {
    this.comment = comment;
    return this;
  }
  public setRates(rates: number): RateCard {
    this.rates = rates;
    return this;
  }
  public toJsx() {
    return (
      <Card sx={{ width: 345, mx: 3 }} key={`${this.name}-rates-${this.id}`}>
        <CardHeader
          avatar={<Avatar src={this.avatar} />}
          title={this.name}
        />
        <CardContent>
          <Rating name="read-only" value={this.rates} precision={0.1} readOnly />
          <Typography>{this.comment}</Typography>
        </CardContent>
      </Card>
    )
  }
}

export { RateCard };