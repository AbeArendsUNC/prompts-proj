import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center"> AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            Prompt machine is a completely legitimate, <em>ORIGINAL,</em> never-before seen tool you can use to see what absolutely vile shit your friends are using ChatGPT for.
        </p>

        <Feed />
    </section>
  )
}

export default Home