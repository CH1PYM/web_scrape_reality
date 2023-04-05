import { Box, Container } from "@mui/material";
import { CardBox } from "./CardBox";
import { NavBar } from "./NavBar";
import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

interface Props {
  setPage: (value: number) => void;
  flatsPerPage: number;
}
interface PageCount {
  countOfRecords: number;
}

export const PaginationComponent = (props: Props) => {
  const url = `${import.meta.env.VITE_API_URL}/getRecords//countOfRecords`;
  const { data, error } = useFetch<PageCount>(url);
  const handleChange = (e: React.ChangeEvent<unknown>, p: number) => {
    props.setPage(p);
  };
  const numberOfPages = (): number => {
    return data?.countOfRecords
      ? Math.ceil(data?.countOfRecords / props.flatsPerPage - 1)
      : 10;
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: "35px" }}>
      <Pagination
        count={numberOfPages()}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </Box>
  );
};
