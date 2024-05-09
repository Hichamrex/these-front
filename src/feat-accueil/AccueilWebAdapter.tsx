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
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { theme } from "../theme/theme";
import "./styles.css";
import styled from "@emotion/styled";

export const AccueilWebAdapter = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container size={420} my={30} style={{ marginTop: "100px" }}>
        <Paper withBorder shadow="ld" p={30} mt={30} radius="md">
          <Title
            align="center"
            sx={() => ({
              fontFamily: `${theme.mainFont}`,
              color: `${theme.mainColor}`,
              fontWeight: 900,
              marginBottom: "1rem",
              fontSize: "25px",
            })}
          >
            COMING SOON
          </Title>
        </Paper>
      </Container>
    </>
  );
};
