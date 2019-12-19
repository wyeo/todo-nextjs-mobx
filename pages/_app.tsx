import React from "react"
import { NextPageContext } from "next"

type Props = {
    Component: React.ComponentType
    pageProps: any
}

interface PageStatelessComponent<P = {}> extends React.FunctionComponent<P> {
    getInitialProps?: (ctx: NextPageContext) => Promise<any>
}

const App: PageStatelessComponent<Props> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

export default App
