import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

export type PlantCardProps = {
    name: string;
    imageUrl: string;
};

const StyledCard = styled(Card)`
    width: 250px;
    height: 300px;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    }
`;

const PlantCard: React.FC<PlantCardProps> = ({ name, imageUrl }) => (
    <StyledCard>
        <CardMedia
            component="img"
            image={imageUrl}
            alt={name}
            style={{
                height: "200px",
                borderRadius: "50%",
                margin: "16px auto",
                width: "80%",
                objectFit: "cover",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
        />
        <CardContent>
            <Typography
                variant="h6"
                component="div"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
            >
                {name}
            </Typography>
        </CardContent>
    </StyledCard>
);

export default PlantCard;
