import readingTime from "reading-time";

interface ReadingTimeProps {
  text: string;
}

const ReadingTime = ({ text }: ReadingTimeProps) => {
  const stats = readingTime(text);
  return <div>{stats.minutes} minutes read</div>;
};

export default ReadingTime;
