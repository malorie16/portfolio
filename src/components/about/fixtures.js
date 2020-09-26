const bio =
  "Hi there 👋🏾 My name is Malorie Casimir. I'm a full stack web developer with experience in Rails and JavaScript. I love web design and striking UIs. My background in opera singing taught me the importance of having attention to detail and taking muiltple perspectives into account when creating applications. Feel free to reach out to me on ";

const splitBio = bio.split(" ");

const colors = [
  "red",
  "purple",
  "green",
  "gray-blue",
  "lime",
  "orange"
]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export const bioWithClassNames = splitBio.map((word) => {
  return {
    word: word,
    color: colors[getRandomInt(colors.length)]
  }
})

