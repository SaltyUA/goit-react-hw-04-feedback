import { StatisticText } from 'components/statistics/Statistics.styled';

const Notification = ({ message }) => {
  return (
    <div>
      <StatisticText>{message}</StatisticText>
    </div>
  );
};

export default Notification;
