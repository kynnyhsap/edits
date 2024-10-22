import { makeTransform, scale, translateY } from "@remotion/animation-utils";
import { fitText } from "@remotion/layout-utils";
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import * as Montserrat from "@remotion/google-fonts/Montserrat";
Montserrat.loadFont();

export function Subtitles() {
  const { fps } = useVideoConfig();

  const words = transcript.words ?? [];

  return (
    <AbsoluteFill>
      {words.map(({ start, end, word }, index) => {
        const subtitleStartFrame = start * fps;
        const subtitleEndFrame = end * fps;

        return (
          <Sequence
            key={index}
            from={subtitleStartFrame}
            durationInFrames={subtitleEndFrame - subtitleStartFrame}
          >
            <AbsoluteFill>
              <AbsoluteFill>
                <Word text={word} />
              </AbsoluteFill>
            </AbsoluteFill>
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
}

const fontFamily = "Montserrat";
const desiredFontSize = 140;

export function Word({ text }: { text: string }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const { width } = useVideoConfig();

  const enter = spring({
    frame,
    fps,
    from: 0,
    to: 1,
    durationInFrames: 5,
    config: { damping: 200 },
  });

  const fittedText = fitText({
    fontFamily,
    text,
    withinWidth: width * 0.8,
  });

  const fontSize = Math.min(desiredFontSize, fittedText.fontSize);

  const transform = makeTransform([
    scale(interpolate(enter, [0, 1], [0.8, 1])),
    translateY(interpolate(enter, [0, 1], [50, 0])),
  ]);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        top: undefined,
        bottom: 650,
        height: 150,
      }}
    >
      <div
        style={{
          fontSize,
          fontWeight: "bold",
          color: "white",
          transform,
          fontFamily,
          textTransform: "uppercase",
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  );
}

const transcript = {
  words: [
    {
      word: "i",
      start: 0.16,
      end: 0.48,
      confidence: 0.80160624,
      punctuated_word: "I",
    },
    {
      word: "tell",
      start: 0.48,
      end: 0.71999997,
      confidence: 0.9982657,
      punctuated_word: "tell",
    },
    {
      word: "young",
      start: 0.71999997,
      end: 0.96,
      confidence: 0.99096,
      punctuated_word: "young",
    },
    {
      word: "men's",
      start: 0.96,
      end: 1.28,
      confidence: 0.6694954,
      punctuated_word: "men's",
    },
    {
      word: "like",
      start: 1.28,
      end: 1.78,
      confidence: 0.6710268,
      punctuated_word: "like,",
    },
    {
      word: "find",
      start: 2.8799999,
      end: 3.1999998,
      confidence: 0.9965578,
      punctuated_word: "find",
    },
    {
      word: "something",
      start: 3.1999998,
      end: 3.6799998,
      confidence: 0.99956864,
      punctuated_word: "something",
    },
    {
      word: "difficult",
      start: 3.6799998,
      end: 4.16,
      confidence: 0.9996321,
      punctuated_word: "difficult",
    },
    {
      word: "to",
      start: 4.16,
      end: 4.3199997,
      confidence: 0.99978405,
      punctuated_word: "to",
    },
    {
      word: "do",
      start: 4.3199997,
      end: 4.8199997,
      confidence: 0.97406113,
      punctuated_word: "do.",
    },
    {
      word: "you",
      start: 5.68,
      end: 5.92,
      confidence: 0.9974025,
      punctuated_word: "You",
    },
    {
      word: "need",
      start: 5.92,
      end: 6.24,
      confidence: 0.999726,
      punctuated_word: "need",
    },
    {
      word: "that",
      start: 6.24,
      end: 6.74,
      confidence: 0.95353794,
      punctuated_word: "that.",
    },
    {
      word: "you're",
      start: 6.7999997,
      end: 7.12,
      confidence: 0.9956757,
      punctuated_word: "You're",
    },
    {
      word: "not",
      start: 7.12,
      end: 7.3599997,
      confidence: 0.99981695,
      punctuated_word: "not",
    },
    {
      word: "built",
      start: 7.3599997,
      end: 7.6,
      confidence: 0.99001265,
      punctuated_word: "built",
    },
    {
      word: "for",
      start: 7.6,
      end: 8.1,
      confidence: 0.9994555,
      punctuated_word: "for",
    },
    {
      word: "comfort",
      start: 9.28,
      end: 9.78,
      confidence: 0.9988158,
      punctuated_word: "comfort",
    },
    {
      word: "or",
      start: 9.84,
      end: 10.16,
      confidence: 0.98704916,
      punctuated_word: "or",
    },
    {
      word: "pleasure",
      start: 10.16,
      end: 10.66,
      confidence: 0.84217167,
      punctuated_word: "pleasure.",
    },
    {
      word: "like",
      start: 11.12,
      end: 11.36,
      confidence: 0.99266595,
      punctuated_word: "Like",
    },
    {
      word: "if",
      start: 11.36,
      end: 11.5199995,
      confidence: 0.502232,
      punctuated_word: "if",
    },
    {
      word: "that",
      start: 11.5199995,
      end: 11.759999,
      confidence: 0.99909973,
      punctuated_word: "that",
    },
    {
      word: "comes",
      start: 11.759999,
      end: 12.08,
      confidence: 0.9995677,
      punctuated_word: "comes",
    },
    {
      word: "along",
      start: 12.08,
      end: 12.559999,
      confidence: 0.80225754,
      punctuated_word: "along,",
    },
    {
      word: "good",
      start: 12.559999,
      end: 13.059999,
      confidence: 0.97016037,
      punctuated_word: "good.",
    },
    {
      word: "you",
      start: 13.235,
      end: 13.3949995,
      confidence: 0.99831843,
      punctuated_word: "You",
    },
    {
      word: "know",
      start: 13.3949995,
      end: 13.8949995,
      confidence: 0.9057362,
      punctuated_word: "know,",
    },
    {
      word: "if",
      start: 13.955,
      end: 14.115,
      confidence: 0.9971686,
      punctuated_word: "if",
    },
    {
      word: "you",
      start: 14.115,
      end: 14.195,
      confidence: 0.9998259,
      punctuated_word: "you",
    },
    {
      word: "have",
      start: 14.195,
      end: 14.315,
      confidence: 0.99982905,
      punctuated_word: "have",
    },
    {
      word: "a",
      start: 14.315,
      end: 14.434999,
      confidence: 0.99951684,
      punctuated_word: "a",
    },
    {
      word: "day",
      start: 14.434999,
      end: 14.754999,
      confidence: 0.9997745,
      punctuated_word: "day",
    },
    {
      word: "where",
      start: 14.754999,
      end: 14.915,
      confidence: 0.9983089,
      punctuated_word: "where",
    },
    {
      word: "you're",
      start: 14.915,
      end: 15.075,
      confidence: 0.99872565,
      punctuated_word: "you're",
    },
    {
      word: "comfortable",
      start: 15.075,
      end: 15.575,
      confidence: 0.999718,
      punctuated_word: "comfortable",
    },
    {
      word: "and",
      start: 15.715,
      end: 15.955,
      confidence: 0.9292866,
      punctuated_word: "and",
    },
    {
      word: "there's",
      start: 15.955,
      end: 16.275,
      confidence: 0.9965806,
      punctuated_word: "there's",
    },
    {
      word: "some",
      start: 16.275,
      end: 16.515,
      confidence: 0.9991592,
      punctuated_word: "some",
    },
    {
      word: "things",
      start: 16.515,
      end: 16.755,
      confidence: 0.9990096,
      punctuated_word: "things",
    },
    {
      word: "around",
      start: 16.755,
      end: 17.074999,
      confidence: 0.9997899,
      punctuated_word: "around",
    },
    {
      word: "you",
      start: 17.074999,
      end: 17.314999,
      confidence: 0.99922574,
      punctuated_word: "you",
    },
    {
      word: "that",
      start: 17.314999,
      end: 17.555,
      confidence: 0.99460286,
      punctuated_word: "that",
    },
    {
      word: "give",
      start: 17.555,
      end: 17.875,
      confidence: 0.99797803,
      punctuated_word: "give",
    },
    {
      word: "pleasure",
      start: 17.875,
      end: 18.375,
      confidence: 0.9786192,
      punctuated_word: "pleasure,",
    },
    {
      word: "have",
      start: 19.395,
      end: 19.715,
      confidence: 0.9982388,
      punctuated_word: "have",
    },
    {
      word: "some",
      start: 19.715,
      end: 19.955,
      confidence: 0.9994679,
      punctuated_word: "some",
    },
    {
      word: "sense",
      start: 19.955,
      end: 20.195,
      confidence: 0.99947494,
      punctuated_word: "sense",
    },
    {
      word: "and",
      start: 20.195,
      end: 20.435,
      confidence: 0.9895698,
      punctuated_word: "and",
    },
    {
      word: "enjoy",
      start: 20.435,
      end: 20.755,
      confidence: 0.9998754,
      punctuated_word: "enjoy",
    },
    {
      word: "it",
      start: 20.755,
      end: 21.255,
      confidence: 0.7948253,
      punctuated_word: "it.",
    },
    {
      word: "but",
      start: 21.715,
      end: 22.035,
      confidence: 0.9974371,
      punctuated_word: "But",
    },
    {
      word: "don't",
      start: 22.035,
      end: 22.195,
      confidence: 0.99922156,
      punctuated_word: "don't",
    },
    {
      word: "be",
      start: 22.195,
      end: 22.355,
      confidence: 0.9998056,
      punctuated_word: "be",
    },
    {
      word: "thinking",
      start: 22.355,
      end: 22.755,
      confidence: 0.9989017,
      punctuated_word: "thinking",
    },
    {
      word: "that's",
      start: 22.755,
      end: 22.994999,
      confidence: 0.9901219,
      punctuated_word: "that's",
    },
    {
      word: "what",
      start: 22.994999,
      end: 23.154999,
      confidence: 0.99972016,
      punctuated_word: "what",
    },
    {
      word: "your",
      start: 23.154999,
      end: 23.314999,
      confidence: 0.9991086,
      punctuated_word: "your",
    },
    {
      word: "life",
      start: 23.314999,
      end: 23.555,
      confidence: 0.99983513,
      punctuated_word: "life",
    },
    {
      word: "is",
      start: 23.555,
      end: 23.794998,
      confidence: 0.99851865,
      punctuated_word: "is",
    },
    {
      word: "aimed",
      start: 23.794998,
      end: 24.035,
      confidence: 0.99969256,
      punctuated_word: "aimed",
    },
    {
      word: "at",
      start: 24.035,
      end: 24.535,
      confidence: 0.96193457,
      punctuated_word: "at.",
    },
    {
      word: "that's",
      start: 24.834938,
      end: 25.154938,
      confidence: 0.9998673,
      punctuated_word: "That's",
    },
    {
      word: "contemptible",
      start: 25.154938,
      end: 25.654938,
      confidence: 0.99868757,
      punctuated_word: "contemptible.",
    },
    {
      word: "everyone",
      start: 26.034939,
      end: 26.514938,
      confidence: 0.9992162,
      punctuated_word: "Everyone",
    },
    {
      word: "knows",
      start: 26.514938,
      end: 26.834938,
      confidence: 0.9997559,
      punctuated_word: "knows",
    },
    {
      word: "that",
      start: 26.834938,
      end: 27.334938,
      confidence: 0.9892761,
      punctuated_word: "that.",
    },
    {
      word: "everyone",
      start: 27.71494,
      end: 28.194939,
      confidence: 0.9991416,
      punctuated_word: "Everyone",
    },
    {
      word: "knows",
      start: 28.194939,
      end: 28.514938,
      confidence: 0.9996407,
      punctuated_word: "knows",
    },
    {
      word: "that",
      start: 28.514938,
      end: 28.754938,
      confidence: 0.9334904,
      punctuated_word: "that.",
    },
    {
      word: "and",
      start: 28.754938,
      end: 28.994938,
      confidence: 0.98317873,
      punctuated_word: "And",
    },
    {
      word: "if",
      start: 28.994938,
      end: 29.154938,
      confidence: 0.996588,
      punctuated_word: "if",
    },
    {
      word: "they",
      start: 29.154938,
      end: 29.314938,
      confidence: 0.99015266,
      punctuated_word: "they",
    },
    {
      word: "orient",
      start: 29.314938,
      end: 29.814938,
      confidence: 0.980149,
      punctuated_word: "orient",
    },
  ],
};
