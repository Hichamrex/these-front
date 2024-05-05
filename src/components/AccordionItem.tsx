import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState } from "react";
import { theme } from "../theme/theme";

interface AccordionProps {
  title: string;
  icon?: JSX.Element;
  action?: JSX.Element;
  children: JSX.Element;
  isExpand?: boolean;
}

const AccordionItem = ({
  title,
  icon,
  action,
  children,
  isExpand  
}: AccordionProps) => {
  const [expanded, setExpanded] = useState(isExpand);
  return (
    <Accordion>
      <AccordionHeader>
        <AccordionInfos>
          {icon}
          <div className="title">{title}</div>
        </AccordionInfos>
        <AccordionActions>
          {action}
          {expanded ? (
            <IconChevronUp
              cursor="pointer"
              color={theme.mainColor}
              size={25}
              onClick={() => setExpanded(!expanded)}
            />
          ) : (
            <IconChevronDown
              cursor="pointer"
              color={theme.mainColor}
              size={25}
              onClick={() => setExpanded(!expanded)}
            />
          )}
        </AccordionActions>
      </AccordionHeader>
      <AccordionBody>{expanded && children}</AccordionBody>
    </Accordion>
  );
};
export default AccordionItem;

const Accordion = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid #e9e9e9;
  margin-bottom:30px;
`;

const AccordionHeader = styled.div`
  display: flex;
  width: 100%;
`;

const AccordionInfos = styled.div`
  width: 50%;
  color: ${theme.mainColor};
  display:flex;
  .title {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    margin-left:15px;
  }
`;

const AccordionActions = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
`;

const AccordionBody = styled.div``;
