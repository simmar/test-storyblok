import Head from "next/head"
import Layout from "../components/Layout"
import Page from "../components/Page"
// The Storyblok Client & hook
import Storyblok, { useStoryblok } from "../lib/storyblok"
import styles from "../styles/Home.module.css"
 
export default function Home(props) {
  // the Storyblok hook to enable live updates
  const story = useStoryblok(props.story)
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <header>
        <h1>
          { story ? story.name : 'My Site' }
        </h1>
      </header>
 
      <main>
        {story ? <Layout><Page content={story.content} /> </Layout> : null}
      </main>
    </div>
  )
}
 
export async function getStaticProps(context) {
  let slug = "home"
  let params = {
    version: "draft", // or 'published'
  }
 
  if (context.preview) {
    params.version = "draft"
    params.cv = Date.now()
  }
 
  let { data } = await Storyblok.get(`cdn/stories/${slug}`, params)
 
  return {
    props: {
      story: data ? data.story : false,
      preview: context.preview || false
    },
    revalidate: 10, 
  }
}