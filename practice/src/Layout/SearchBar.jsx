import React from 'react';
import {
  Box,
  TextField,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';

const Search = ({ value, onChange }) => {
  return (
    <Box sx={{ mb: 2, maxWidth: 300  , border:' black'}}> 
      <TextField
        fullWidth
        size="small"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          ),
          endAdornment: value ? (
            <InputAdornment position="end">
              <CancelIcon
                fontSize="small"
                sx={{ cursor: 'pointer' }}
                onClick={() => onChange("")}
              />
            </InputAdornment>
          ) : null,
        }}
      />
    </Box>
  );
};

export default Search;
