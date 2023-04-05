import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Card } from "@mui/material";
interface Props {
  id: number;
  url: string;
  name: string;
}
export const CardBox = (props: Props) => {
  return (
    <Card sx={{ maxWidth: 1000, m: "20px" }}>
      <CardActionArea sx={{ display: "flex", flexDirection: "row" }}>
        <CardMedia
          component="img"
          height="250px"
          image={props.url}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            sx={{ width: "320px" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
