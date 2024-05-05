import {  useState } from "react";
import { Modal, Button, useMantineTheme, 
       LoadingOverlay,  
       TextInput,
       Select} from "@mantine/core";
import {Container, Grid, rem} from '@mantine/core';
import { Box } from '@mui/material';
import { IconCalendarTime, IconSend } from "@tabler/icons-react";
import * as yup from 'yup'; 
import { useFormik} from 'formik';
import { theme } from "../theme/theme";
import { useMediaQuery } from "@mantine/hooks";
import { DateInput } from "@mantine/dates";
import { addDays, format, parseISO } from "date-fns";
import { constants } from "../common/constants";



interface InvoiceOpenProps {
  opened: boolean,
  setOpened: React.Dispatch<React.SetStateAction<boolean>>,
}

const  AddForm = ({opened, setOpened }: InvoiceOpenProps) => {
  const themes = useMantineTheme();
  const [showLoading, setShowLoading] = useState(false);

  const theseSchema = yup.object().shape({
    theseName: yup.string().required("Requis"),
    theseDate: yup.date().required("Requis"),
  }); 

  const theseFormik = useFormik({
    initialValues: {
      theseName: "",
      theseDate: null,
    },
    // enableReinitialize: true,
    validationSchema: theseSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
      handleSubmit(values);
    }
  });

const handleSubmit = async(values: any) => {
  setShowLoading(true);
  try {
    alert("COMING SOON");  
  } catch (error) {
    console.log("Error Add These " + error);    
  }
}

const handleClear = () => {
  theseFormik.resetForm();
}
  
const handleClose = () => {
  handleClear();
  setOpened(false);
}

const isMobile = useMediaQuery("(max-width: 37em)");
  
  return (
    <>
      <Modal
        opened={opened}
        onClose={handleClose}
        size="60%"
        overlayProps={{
          color: themes.colors.gray[8],
          opacity: 0.8,
          blur: 1,
        }}
        centered
        closeOnClickOutside={false}
        styles={{
          content: {
              marginLeft: isMobile ? 0 : '-10vw',
              color: theme.mainColor,
              fontFamily: theme.mainFont,
          },
        }}
        title={constants.ADD_THESE}
      >
        <form onSubmit={theseFormik.handleSubmit}>
        <Container style={{ paddingBottom: "5px" }}>
          <Grid>
          <Grid.Col xs={12}>
            <TextInput
                name="theseName"
                label="These Nom"
                withAsterisk
                value={theseFormik.values.theseName}
                onChange={(value) => theseFormik.setFieldValue('theseName', value)}
                onBlur={theseFormik.handleBlur}
                error={theseFormik.touched.theseName && theseFormik.errors.theseName}
              />
            </Grid.Col>
          <Grid.Col xs={12}>
              <DateInput
                name="theseDate"
                label="Date du these"
                placeholder="Date du these"
                withAsterisk
                value={theseFormik?.values?.theseDate}
                onChange={(date) => theseFormik.setFieldValue('theseDate', date)}
                onBlur={theseFormik.handleBlur}
                error={theseFormik.touched.theseDate && theseFormik.errors.theseDate}
              />
            </Grid.Col>
          </Grid>        
        </Container>
       
       
       {/* ------------------------------------------------------------------- */}
       
        {/* Adjusting submit button and clear */}
        <Box sx={{marginLeft: "28rem", marginTop: "2rem"}}>
              <Button 
                variant='default' 
                color='red' 
                sx={{marginRight: "10px"}}
                onClick={handleClear}
              >
              Clear
            </Button>
              <Button 
                rightIcon={<IconSend size={rem(17)}/>}
                variant='filled' 
                color='blue'
                type="submit"
              >
              Enregistrer
            </Button>
        </Box>
        </form>
      </Modal>
      <LoadingOverlay visible={showLoading} loaderProps={{ children: 'Loading...' }} />
    </>
  );
}



export default AddForm;


