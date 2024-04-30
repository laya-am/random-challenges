import { LightButton, Icon, Text, Name, State } from "./Light.styled";
import { useLightsStore } from "@/stores/useLightsStore";

export default function Light({light}) {
  const onToggle = useLightsStore(state => state.handleToggle)

  return (
    <LightButton
      type="button"
      onClick={() => {
        onToggle(light.id);
      }}
      $isOn={light.isOn}
    >
      <Icon $isOn={light.isOn}>💡</Icon>
      <Text>
        <Name>{light.name}</Name>
        <State>{light.isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
