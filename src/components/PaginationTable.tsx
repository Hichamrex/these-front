import { ActionIcon, Button, LoadingOverlay, Pagination, Skeleton, Table, rem } from "@mantine/core";
import { Delete, DescriptionOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { format, parseISO } from 'date-fns';
import { IconListDetails, IconTrash } from "@tabler/icons-react";

function chunk<T>(array: T[], size: number): T[][] {

  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);
  return [head, ...chunk(tail, size)];
}

interface PaginationProps {
  //General
  isLoading?: boolean;
  isInFolder?: boolean;
  isError?: boolean;
  error?: any;
  tableHeader: string[];
  tableData: {
    // Theses Data that will be get from the backend
    id: number;
    Col1: string;
    Col2?: string;
    statut?: string;
    Col3?: string;
    Col4?: string;
    date?: string;
  }[],
    //it is used to choose wich data should be displayed
    isThesesPagination?: boolean;
    color?: string;
    bgColor?: string;
}
const PaginationTable = ({ tableHeader, tableData, isThesesPagination, isLoading, isError, error,
   color, bgColor}: PaginationProps) => {
  const navigate = useNavigate();
  const [activePage, setPage] = useState(1);
  const [showLoading, setShowLoading] = useState(false);
  const data = chunk([...tableData], 5);
  // const [dataState,setDataState] = useState(data);
  
  const handleDelete = () => {
  }
 
//   const handleOpenFolder = (id: number) => {
//       navigate(`/folder/${id}`);
//   }

  const rows = data?.length > 0 ? data[activePage - 1].map((element) => (
    <TableRow
      onClick={ () => {
        if(isThesesPagination) {
          setShowLoading(true);
          setTimeout(() => {
            alert("COMING SOON");
            // handleOpenFolder(element.id);
            setShowLoading(false);
          }, 800);
        }
      }
      }
      key={element.id}
    >
      {(isThesesPagination) && <td>{element.Col1}</td>}
      {(isThesesPagination) && <td>{element.Col2}</td>}
      {isThesesPagination &&<td>
        <p
          style={{
            backgroundColor:bgColor,
            color: color,
            padding: "2px 8px",
            fontWeight: 600,
            borderRadius: "2px",
          }}
        >
          {element.statut}
        </p>
      </td> }
      {isThesesPagination && <td>{element?.date}</td>}
      {(isThesesPagination) && <td>{element.Col3}</td>}
      {(isThesesPagination) && <td>{element.Col4}</td>}
        {
          (isThesesPagination) &&
        <td>
        <ActionIcon
          sx={{color: "red"}}
          // style={{ color: "rgb(255, 104, 104)", cursor: "pointer" }}
          onClick={(e) =>{
            e.stopPropagation();
            alert("COMING SOON");
          }}
          >
        <IconTrash style={{ width: rem(22), height: rem(22) }} />
          </ActionIcon>
      </td>
        }
    </TableRow>
  )) : [];
      
  const folderTable = (
    <Table>
      <thead>
        <tr>
          {tableHeader.map((e: string) => (
            <th>{e}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
            // Render skeleton loading here
            <>
            <tr>
              <td colSpan={tableHeader.length}>
              <Skeleton height={30}/>
              </td> 
            </tr>
            <tr>
            <td colSpan={tableHeader.length}>
            <Skeleton height={30}/>
            </td> 
          </tr>
          <tr>
            <td colSpan={tableHeader.length}>
              <Skeleton height={30}/>
            </td> 
          </tr>
          <tr>
            <td colSpan={tableHeader.length}>
              <Skeleton height={30}/>
            </td> 
          </tr>
          <tr>
            <td colSpan={tableHeader.length}>
              <Skeleton height={30}/>
            </td> 
          </tr>
        </>
        ) : isError ? (
            // Render error message here
            <tr>
                <td colSpan={tableHeader.length}>Error: {error?.data}</td>
            </tr>
        ) : (
            // Render rows with data
            rows?.length > 0 ?
             rows 
             :
             <tr>
                <td colSpan={tableHeader.length}>{"NO DATA FOUND"}</td>
            </tr>
        )}
    </tbody>
    </Table>
  );
  return (
    <>
    <div style={{ textAlign: "center" }}>
      {folderTable}
      <Pagination
        color="#095797"
        total={data.length}
        value={activePage}
        onChange={setPage}
        mt="sm"
        style={{ display: "inline-flex" }}
      />
    </div>
    <LoadingOverlay visible={showLoading} />
    </>
      

    );
};
export default PaginationTable;

const TableRow = styled.tr`
  cursor: pointer;
  :hover{
    background-color: rgba(9, 87, 151, 0.02);
    // background-color:rgb(0,0,0,0.02);
  }
`;
