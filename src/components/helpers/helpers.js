export const getRandomNumber = () => {
  const randomIndex = Math.floor(Math.random() * 220)
  console.log(randomIndex)
  return randomIndex
}