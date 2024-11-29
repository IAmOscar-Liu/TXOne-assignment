export default function formatTodayTime() {
  const now = new Date();

  // Get hours and minutes
  let hours = now.getHours();
  const minutes = now.getMinutes();

  // Determine AM/PM and adjust hours
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert 0 or 12-hour to 12-hour format

  // Combine into the desired format
  return `Today ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${period}`;
}
