const getFoo = () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('dev')
  }

  return 'foo'
}

console.log(getFoo())

