import { Composition, staticFile } from "remotion";
import { VideoComposition } from "./remotion";

const FPS = 60;
const ID = "tiktok-edit";

export function RemotionRoot() {
  console.log(staticFile("music/theloser.mp3"));
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
