const unixTime = async (req, res) => {
  const inputDate = req.params.date;

  if (!inputDate) {
    const currentDate = new Date();
    const unixTimeStamp = currentDate.getTime();
    return res.json({ unix: unixTimeStamp, utc: currentDate.toUTCString() });
  }

  let dateObject;
  if (/^\d+$/.test(inputDate)) {
    dateObject = new Date(parseInt(inputDate));
  } else {
    dateObject = new Date(inputDate);
  }
  
  if (isNaN(dateObject.getTime())) {
    return res.json({ error: "Invalid Date" });
  }

  const unixTimeStamp = dateObject.getTime();

  res.json({ unix: unixTimeStamp, utc: dateObject.toUTCString() });
};

module.exports = { unixTime };
