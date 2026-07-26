import { useState, useEffect, useRef, useCallback } from 'react';

interface UseTypewriterOptions {
  /** Characters per second */
  speed?: number;
  /** Delay between lines in ms */
  lineDelay?: number;
  /** Delay before starting in ms */
  startDelay?: number;
  /** Called when all lines are fully typed */
  onComplete?: () => void;
}

interface TypewriterLine {
  text: string;
  isComplete: boolean;
}

export function useTypewriter(
  lines: string[],
  options: UseTypewriterOptions = {}
) {
  const {
    speed = 60,
    lineDelay = 300,
    startDelay = 400,
    onComplete,
  } = options;

  const [displayedLines, setDisplayedLines] = useState<TypewriterLine[]>(
    lines.map(() => ({ text: '', isComplete: false }))
  );
  const [isComplete, setIsComplete] = useState(false);
  const completedRef = useRef(false);

  const startTyping = useCallback(() => {
    if (completedRef.current) return;

    let lineIndex = 0;
    let charIndex = 0;
    const currentLines: string[] = lines.map(() => '');

    const type = () => {
      if (lineIndex >= lines.length) {
        setIsComplete(true);
        completedRef.current = true;
        onComplete?.();
        return;
      }

      const currentLine = lines[lineIndex];
      const shouldWait = charIndex === 0 && lineIndex > 0;

      if (shouldWait) {
        // Extra pause between lines
        setTimeout(type, lineDelay);
        return;
      }

      if (charIndex < currentLine.length) {
        currentLines[lineIndex] = currentLine.slice(0, charIndex + 1);
        setDisplayedLines(
          currentLines.map((text, i) => ({
            text,
            isComplete: i < lineIndex || (i === lineIndex && charIndex + 1 >= currentLine.length),
          }))
        );
        charIndex++;
        setTimeout(type, 1000 / speed);
      } else {
        // Line complete, move to next
        lineIndex++;
        charIndex = 0;
        if (lineIndex < lines.length) {
          setTimeout(type, lineDelay);
        } else {
          setIsComplete(true);
          completedRef.current = true;
          onComplete?.();
        }
      }
    };

    setTimeout(type, startDelay);
  }, [lines, speed, lineDelay, startDelay, onComplete]);

  useEffect(() => {
    setDisplayedLines(lines.map(() => ({ text: '', isComplete: false })));
    setIsComplete(false);
    completedRef.current = false;

    const timeout = setTimeout(startTyping, startDelay);
    return () => clearTimeout(timeout);
  }, [lines, startTyping, startDelay]);

  return { displayedLines, isComplete };
}
