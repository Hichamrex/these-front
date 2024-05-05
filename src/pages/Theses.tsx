import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { Layout } from "./layouts/Layout";
import { theme } from "../theme/theme";
import { Accordion, Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import AccordionItem from "../components/AccordionItem";
import PaginationTable from "../components/PaginationTable";
import AddForm from "../feat-theses/AddForm";


const tableData = [
  {
    id: 1,
    Col1: "Test Data",
    Col2: "Test Data",
    statut: "Actif",
    Col3: "Test Data",
    Col4: "Test Data",
    date: "10/03/2024",
  },
  {
    id: 1,
    Col1: "Test Data",
    Col2: "Test Data",
    statut: "Actif",
    Col3: "Test Data",
    Col4: "Test Data",
    date: "10/03/2024",
  },
  {
    id: 1,
    Col1: "Test Data",
    Col2: "Test Data",
    statut: "Actif",
    Col3: "Test Data",
    Col4: "Test Data",
    date: "10/03/2024",
  },
  {
    id: 1,
    Col1: "Test Data",
    Col2: "Test Data",
    statut: "Actif",
    Col3: "Test Data",
    Col4: "Test Data",
    date: "10/03/2024",
  },
  {
    id: 1,
    Col1: "Test Data",
    Col2: "Test Data",
    statut: "Actif",
    Col3: "Test Data",
    Col4: "Test Data",
    date: "10/03/2024",
  },
  {
    id: 1,
    Col1: "Test Data",
    Col2: "Test Data",
    statut: "Actif",
    Col3: "Test Data",
    Col4: "Test Data",
    date: "10/03/2024",
  }
];


const tableHeader = [
    "Col 1",
    "Col 2",
    "Statut",
    "Col 3",
    "Col 4",
    "Date",
    "Supprimer"
];
const Theses = () => {

  const [openAddForm, setOpenAddForm] = useState(false);

  const accordionItems = [
    {
      icon: <FilterAltOutlinedIcon />,
      title: "Filter",
      children: (
        <>Coming SOON</>
      ),
      isExpand: false
    },
    {
      icon: <FolderOutlinedIcon  />,
      title: "Theses",
      action: (
        <Button
          sx={{
            marginRight: "15px",
          }}
          leftIcon={<IconPlus size={14} />}
          color={theme.mainColor}
          variant="light"
          onClick={() => {
            setOpenAddForm(true);
          }}
        >
          Ajouter Theses
        </Button>
      ),
      children: <PaginationTable 
                    tableData={tableData} 
                    tableHeader={tableHeader} 
                    isThesesPagination={true}
                    color={"#00B112"}
                    bgColor={"#ECFFEE"}
                />,
      isExpand: true
    },
  ];
  return (
    <>
    <Layout isHeaderAuth={false} hasSideBar={true}>
      <Accordion>
      {accordionItems.map((accordion, index) => {
        return (
          <AccordionItem
            icon={accordion.icon}
            title={accordion.title}
            action={accordion.action}
            isExpand={accordion.isExpand}
          >
            {accordion.children}
          </AccordionItem>
        );
      })}
      </Accordion>
    </Layout>
    <AddForm 
      opened={openAddForm}
      setOpened={setOpenAddForm}
    />
    </>
  );
};

export default Theses;
