process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error', err)
  process.exit(1) //mandatory (as per the Node.js docs)
})

export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from secrets provider',
    }),
  }
}

handler()
