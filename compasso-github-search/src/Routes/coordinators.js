export const goToHomePage = (history) => {
  history.push('/')
}

export const goToProfilePage = (history, userName) => {
  history.push(`/${userName}`)
}

export const goToContactPage = (history) => {
  history.push('/contact')
}