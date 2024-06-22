import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Container,
  Group,
  Text,
  Button,
  LoadingOverlay,
  Grid,
  Box,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { theme } from "../theme/theme";
import "./styles.css";
import styled from "@emotion/styled";
import { IconArrowRight, IconListSearch, IconSchool, IconSearch, IconUsers } from "@tabler/icons-react";
import { useGetTheseCountsQuery, useGetUpcomingTheseQuery } from "../redux/features/Theses/sliceThese";

export const AccueilWebAdapter = () => {
  const navigate = useNavigate();
  const [isThese, setIsThese] = useState(true);
  const [isPersonne, setIsPersonne] = useState(false);
  
  const {
    isLoading: isLoadingD, 
    isError: isErrorD,
    error: errorD,
    data: counts
  } = useGetTheseCountsQuery({});

  const {
    isLoading: isLoading, 
    isError: isError,
    error: error,
    data: upcoming
  } = useGetUpcomingTheseQuery({});

  console.log("VALUE " + JSON.stringify(counts));
  return (
    <>
    
      <Wrapper>
      <Box
      sx={{
        border: "2px solid black",
        marginTop: "-50px",
        marginLeft: "-115px",
        // marginRight: "20px"
      }}
    >
      <Text>Hello</Text>
      <Text>Check</Text>
    </Box>
        <Box 
         sx={{
          marginLeft: "300px"
         }}
        >
      <Title align="center"
          sx={{color: "#0c2135",
            fontWeight: 100
          }}
        >
          Le moteur de recherche des thèses FSAC
        </Title>
        <Group position="center" mt="md">
          <Button variant="subtle" size="lg"
            sx={{
              // backgroundColor: "#0A4A7A",
              color: "#0A4A7A",
            }}
            leftIcon={
              <IconSchool />
            }
          >
            {isThese && <span >-</span>}
            Les theses
            {isThese && <span>-</span>}
          </Button>  ||
          <Button variant="subtle" size="lg" 
            sx={{
              // backgroundColor: "#0A4A7A",
              color: "#0A4A7A"
            }}
            leftIcon={
              <IconUsers />
            }
          >
            {isPersonne && <span>-</span>}
            Les Personnes
            {isPersonne && <span>-</span>}
          </Button>
        </Group>

        <Group position="center" mt="md">
          {/* <Button variant="filled" size="lg"
            sx={{
              backgroundColor: "#0A4A7A",
              color: "#ffffff",
              borderRadius: "15px"
            }}
            leftIcon={
              <IconSchool />
            }
          >
            Les theses a Venir
          </Button>   */}
          <Button variant="filled" size="lg" 
            sx={{
              backgroundColor: "#0A4A7A",
              color: "#ffffff",
              borderRadius: "15px",
              width: "500px"
            }}
            leftIcon={
              <IconListSearch />
            }
            onClick={() => {
              navigate("/search/soutenue/these");
            }}
          >
            Cliquez pour chercher
          </Button>
        </Group>
        
        {/* <TextInput
          placeholder="Rechercher des personnes, par nom ou par domaine d’expertise"
          size="md"
          mt="md"
          sx={{
            width: "600px",
            marginLeft: "210px"
          }}
          rightSection={
            <IconSearch 
              color="gray"
            />
          }
        /> */}
        {/* <Button mt="md"
          sx={{
            width: "110px",
            // left: "left",
            marginLeft: "690px",
            borderRadius: "50px",
            // color: "#eeef"
            backgroundColor: "#0A4A7A",
            color: "white"
          }}
          onClick={() => {
            navigate("/search");
          }}
        >
          Rechercher
        </Button> */}
        <Grid mt="xl" justify="center">
        <Boxes>
          <Grid.Col span={4} sx={{
            border: "1px solid #eee",
            borderRadius: "12px",
            marginRight: "12px"
          }}>
              <Text align="center" size="xl" weight={700}
              >
                {counts?.data?.soutenue_count || 0}
              </Text>
              <Text align="center">Thèses soutenues</Text>
              <Button fullWidth mt="sm" variant="filled"
                sx={{
                  backgroundColor: "#0A4A7A",
                  color: "white",
                  borderRadius: "15px"
                }}
                rightIcon={<IconArrowRight />}
                onClick={() => {
                  navigate("/search/soutenue/these");
                }}
              >
                Explorer
              </Button>
          </Grid.Col>
          <Grid.Col span={4} sx={{
            border: "1px solid #eee",
            borderRadius: "12px",
            marginRight: "12px",
          }}>
              <Text align="center" size="xl" weight={700}>
              {counts?.data?.unique_users_count || 0}
              </Text>
              <Text align="center">Personne liées aux thèses</Text>
              <Button fullWidth mt="sm" variant="filled" 
                sx={{
                  backgroundColor: "#0A4A7A",
                  color: "white",
                  borderRadius: "15px"
                }}
                rightIcon={<IconArrowRight />}
                onClick={() => {
                  navigate("/search/soutenue/personne");
                }}
              >
                Explorer
              </Button>
          </Grid.Col>
          <Grid.Col span={4} sx={{
            border: "1px solid #eee",
            borderRadius: "12px",
          }}>
              <Text align="center" size="xl" weight={700}>
              {counts?.data?.preparation_count || 0}
              </Text>
              <Text align="center">Thèses en préparation</Text>
              <Button fullWidth mt="sm" variant="filled"
                sx={{
                  backgroundColor: "#0A4A7A",
                  color: "white",
                  borderRadius: "15px"
                }}
                rightIcon={<IconArrowRight />}
                onClick={() => {
                  navigate("/search/preparation/these");
                }}
              >
                Explorer
              </Button>
          </Grid.Col>
          </Boxes>
        </Grid>
        </Box>
    </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 80vw;
  margin: 100px auto;
  display: flex;
  // border: 2px solid black;
  padding: 10px;
`;

const Boxes = styled.div`
  // marginTop: 100px;
  display: flex;
  justify-content: space-between;
`
