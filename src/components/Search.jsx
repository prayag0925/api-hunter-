import { TextField } from "@mui/material";

function Search({ search, setSearch }) {
  return (
    <TextField
      fullWidth
      label="Search Mobile"
      placeholder="Search by brand or model..."
      variant="outlined"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      sx={{ mb: 3 }}
    />
  );
}

export default Search;