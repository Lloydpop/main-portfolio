import { useMemo } from "react";

const useMonthAndYear = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const months = useMemo(() => {
    return [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  }, [currentMonth]);
  const date = useMemo(() => {
    if (months && currentMonth) {
      return months[currentMonth];
    }
  }, [months, currentMonth]);
  return {
    date,
    year,
  };
};

export default useMonthAndYear;
