import { Composition } from "remotion";
import { VideoComposition } from "./remotion";

const FPS = 60;
const ID = "banger";

export function RemotionRoot() {
  return (
    <Composition
      id={ID}
      durationInFrames={FPS * 27.5}
      fps={FPS}
      width={1080}
      height={1920}
      component={VideoComposition}
      defaultProps={{}}
    />
  );
}
