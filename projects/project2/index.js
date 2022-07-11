function Header () {
    return (
        <header>
            <nav>
                <img src="react-logo.png" alt="" width="40px"/>
            </nav>
        </header>
    )
}

function Footer () {
    return (
        <footer>
            <small>All rights reserverd.</small>
        </footer>
    )
}

function MainComponent () {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer if I know React</li>
            </ol>
        </div>
    )
}

function Page () {
    return (
        <div>
            <Header />
            <MainComponent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))