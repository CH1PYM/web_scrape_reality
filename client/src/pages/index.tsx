import { Box, Container } from "@mui/material";
import { CardBox } from "../components/CardBox";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { PaginationComponent } from "../components/PaginationComponent";

interface FlatRecord {
  id: number;
  flatName: string;
  imgURL: string;
}
interface PageCount {
  countOfRecords: number;
}
export const Index = () => {
  const flatsPerPage = 8;
  const [page, setPage] = useState(1);
  const url = `${
    import.meta.env.VITE_API_URL
  }/getRecords/?page=${page}&limit=${flatsPerPage}`;
  const { data, error } = useFetch<FlatRecord[]>(url);
  return (
    <Container
      maxWidth="md"
      sx={{ backgroundColor: "#e7eaf6", paddingTop: "2em", height: "100%" }}
    >
      {data?.map((flatRecords) => {
        return (
          <CardBox
            id={flatRecords.id}
            name={flatRecords.flatName}
            url={flatRecords.imgURL}
          />
        );
      })}
      <PaginationComponent flatsPerPage={flatsPerPage} setPage={setPage} />
    </Container>
  );
};
