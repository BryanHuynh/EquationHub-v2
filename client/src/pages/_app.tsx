import "@/styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type ComponentWithPageLayout = AppProps & {
    Component: AppProps["Component"] & {
        PageLayout?: React.ComponentType;
    };
};

export default function App({ Component, pageProps }: ComponentWithPageLayout) {
    const client = new ApolloClient({
        uri: "http://localhost:8080/graphql",
        cache: new InMemoryCache(),
    });

    return (
        <>
            <div className={`${inter.className}`}>
                <ApolloProvider client={client}>
                    {Component.PageLayout ? (
                        //@ts-ignore
                        <Component.PageLayout>
                            <Component {...pageProps} />
                        </Component.PageLayout>
                    ) : (
                        <Component {...pageProps} />
                    )}
                </ApolloProvider>
            </div>
        </>
    );
}
