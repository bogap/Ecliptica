import React, { ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";

export interface PlantSearchProps {
    query: string;
    onSearch: (query: string) => void;
    placeholder?: string;
}

const useStyles = makeStyles({
    searchInput: {
        width: "100%",
        marginBottom: "1rem",
        "& .MuiOutlinedInput-root": {
            borderRadius: "50px",
            padding: "0.5rem",
        },
        "& .MuiInputLabel-root": {
            fontSize: "1.2rem",
        },
    },
});

const PlantSearch: React.FC<PlantSearchProps> = ({
    query,
    onSearch,
    placeholder,
}) => {
    const classes = useStyles();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    };

    return (
        <TextField
            className={classes.searchInput}
            variant="outlined"
            value={query}
            onChange={handleInputChange}
            placeholder={placeholder || "Search..."}
            label={placeholder || "Search..."}
            InputProps={{
                style: { padding: "10px" },
            }}
            fullWidth
        />
    );
};

export default PlantSearch;
