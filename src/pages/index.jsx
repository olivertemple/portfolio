import * as React from "react"
import "./styles/index.scss";
const items = require("../items.json");
// markup
const IndexPage = () => {
  console.log(items)
  return (
    <main>
      <title>Oliver Temple</title>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h2>Hello, I am</h2>
            <h1 className="title">
              Oliver Temple
            </h1>
          </div>
          <div>
              <p>I am an A level student in the UK, with a love for software development</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default IndexPage
