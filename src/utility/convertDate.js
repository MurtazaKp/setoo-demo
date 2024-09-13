import React from "react";


const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); 
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

// ConvertDate component or utility function
const ConvertDate = ({ date }) => {
  const newDate = new Date(date);
  return formatDate(newDate);
};

export default ConvertDate;
