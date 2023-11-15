// import * as S from "./volumeBlock.styles";
import { styled } from "styled-components";

export const StyledVolumeProgress = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  @@ -11,6 +12,7 @@ width: auto;
  padding: 0 92px 0 0;
`;
export const StyledVolumeProgressLine = styled.div`
  padding-left: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default function ProgressValume({ volume, onVolumeChange }) {
  const handleVolumeChange = (event) => {
    const shiftVolume = event.target.value;
    onVolumeChange(shiftVolume);
  };

  return (
    <StyledVolumeProgress>
      <StyledVolumeProgressLine
        type="range"
        name="range"
        min={0}
        max={100}
        value={volume}
        onChange={handleVolumeChange}
        $progress={volume}
      />
    </StyledVolumeProgress>
  );
}
