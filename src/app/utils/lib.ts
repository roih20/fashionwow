

export function calculateTimeBetweenDates(date: Date) {
  const commentPostDate = new Date(date).getTime()
  const currentDate = new Date().getTime()

  const daysBetweenDates = Math.floor(Math.abs(currentDate - commentPostDate) / (1000 * 60 * 60 * 24))
  const hoursBetweenDates = Math.floor(Math.abs(currentDate - commentPostDate) / (1000 * 60 * 60))
  const minutesBetweenDates= Math.floor(Math.abs(currentDate - commentPostDate) / (1000 * 60))
  const secondsBetweenDates = Math.floor(Math.abs(currentDate - commentPostDate) / (1000))

  if (daysBetweenDates > 0 && daysBetweenDates < 7) {
    return daysBetweenDates > 1 ? `${daysBetweenDates} days ago` : `${daysBetweenDates} day ago`
  } else if (hoursBetweenDates > 0 && hoursBetweenDates < 24) {
    return hoursBetweenDates > 1 ? `${hoursBetweenDates} hours ago` : `${hoursBetweenDates} hour ago`
  } else if (minutesBetweenDates > 0 && minutesBetweenDates < 60) {
    return minutesBetweenDates > 1 ? `${minutesBetweenDates} minutes ago` : `${minutesBetweenDates} minute ago`
  } else if (secondsBetweenDates > 0 && secondsBetweenDates < 60) {
    return secondsBetweenDates > 1 ? `${secondsBetweenDates} seconds ago`: `${secondsBetweenDates} second ago`
  } else {
    return `posted on ${date.toLocaleDateString()}`
  }
}