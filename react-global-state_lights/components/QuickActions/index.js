import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({switchAllLights}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          console.log("Turn all lights off");
          switchAllLights(false)
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          console.log("Turn all lights on");
          switchAllLights(true)
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
