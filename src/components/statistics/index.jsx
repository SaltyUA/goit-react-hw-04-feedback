import { StatisticText, StatisticsList } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <div>
      <StatisticsList>
        <li>
          <StatisticText>Good: {good}</StatisticText>
        </li>
        <li>
          <StatisticText>Neutral: {neutral}</StatisticText>
        </li>
        <li>
          <StatisticText>Bad: {bad}</StatisticText>
        </li>
        <li>
          <StatisticText>Total: {total}</StatisticText>
        </li>
        <li>
          <StatisticText>Positive feedback: {positive}%</StatisticText>
        </li>
      </StatisticsList>
    </div>
  );
};

export default Statistics;
