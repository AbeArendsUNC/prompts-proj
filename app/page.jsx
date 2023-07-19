import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center"> Your Horrible Takes</span>
        </h1>
        <p className="desc text-center">
            Thought Tank is a free-to-use, shitty service that allows you to throw random ideas out there. Allow yourself the freedom to be completely judged on our 100% non-anonymous, data-stealing application :)
        </p>

        <Feed />
    </section>
  )
}

export default Home