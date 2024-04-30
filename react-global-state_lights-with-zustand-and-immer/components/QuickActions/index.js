import styled from "styled-components";
import Button from "../Button";
import { useLightsStore } from "@/stores/useLightsStore";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions() {
  const switchAllLights = useLightsStore(state => state.switchAllLights)

  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          switchAllLights(false)
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          switchAllLights(true)
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
