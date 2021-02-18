import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
        <div>Nav</div>
        <Component {...pageProps} />
        </>
}

export default MyApp
