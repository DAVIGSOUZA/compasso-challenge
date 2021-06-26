export const goToHomePage = (history) => {
  history.push('/')
}

export const goToProfilePage = (history, userId) => {
  history.push(`/profile/${userId}`)
}

export const goToContactPage = (history) => {
  history.push('/contact')
}