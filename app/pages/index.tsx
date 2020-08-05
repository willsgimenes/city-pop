import Head from 'next/head'
import {getQuote} from "@willsgimenes/marina";
import {getQuote as PlasticLove} from "@willsgimenes/plastic-love";

import ComponentHighlighter from "@willsgimenes/cosmo-clock-21";

const Home = () => (
    <div className="container">
        <Head>
            <title>City pop</title>
            <link rel="icon"
                  href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎸</text></svg>"/>
        </Head>

        <main
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                textAlign: 'center'
            }}
        >
            <h1 className="title">
                You should listen city pop! 🎸
            </h1>

            <section>
                <ComponentHighlighter
                    active={true}
                    fullScopeName
                    data-package-id="@willsgimenes/marina"
                >
                    <p>{getQuote()}</p>
                </ComponentHighlighter>

                <ComponentHighlighter
                    active={true}
                    fullScopeName
                    data-package-id="@willsgimenes/plastic-love"
                >
                    <p>{PlasticLove()}</p>
                </ComponentHighlighter>

                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/hgb2Omu6voI"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </section>

        </main>

    </div>
)

export default Home
