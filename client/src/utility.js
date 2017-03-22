
export function parseTime(date=new Date()) {
  const today = date.getDay();
  const thisMonth = date.getMonth();
  const daysOfWeek = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const months = ["Jan","Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  return {
    hour: date.getHours(),
    minutes: date.getMinutes(),
    date: date.getDate(),
    day: daysOfWeek[today],
    month: thisMonth[thisMonth],
  };
}
