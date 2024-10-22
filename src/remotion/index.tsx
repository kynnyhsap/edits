import {
  AbsoluteFill,
  staticFile,
  Video,
  Audio,
  Sequence,
  useVideoConfig,
  Series,
} from "remotion";
import { Subtitles } from "./components/Subtitles";

export const VideoComposition = () => {
  const { fps } = useVideoConfig();

  const musicSrc = staticFile("music/Money Trees.mp3");

  const mainClipSrc = staticFile(
    "clips/jordan_peterson_find_something_difficult.mp4"
  );

  const clips = [
    {
      start: 0,
      end: 2.5,
      src: mainClipSrc,
    },
    {
      start: 2.5,
      end: 5.3,
      src: staticFile("stock/jogging.mp4"),
    },
    {
      start: 5.3,
      end: 11,
      src: mainClipSrc,
    },
    {
      start: 11,
      end: 13.6,
      src: staticFile("stock/earth.mp4"),
    },
    {
      start: 13.6,
      end: 27.5,
      src: mainClipSrc,
    },
  ];

  return (
    <AbsoluteFill>
      <Audio src={musicSrc} />

      <Audio src={mainClipSrc} endAt={27.5 * fps} />

      {clips.map((clip) => {
        return (
          <Sequence
            from={clip.start * fps}
            durationInFrames={(clip.end - clip.start) * fps}
          >
            <BgWithPadding>
              <Video
                muted
                src={clip.src}
                startFrom={clip.src === mainClipSrc ? fps * clip.start : 0}
                style={{
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </BgWithPadding>
          </Sequence>
        );
      })}

      <Subtitles />
    </AbsoluteFill>
  );
};

function BgWithPadding({ children }: { children: React.ReactNode }) {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          borderRadius: "100px",
          margin: "auto 50px",
          overflow: "hidden",
          height: "50%",
          // border: "1px solid white", // debug
        }}
      >
        {children}
      </div>
    </AbsoluteFill>
  );
}
