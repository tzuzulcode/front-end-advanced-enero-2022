import Article from "../components/Article"

export async function getServerSideProps(){
  const articlesReq = await fetch("http://localhost:3000/api/articles")

  const articles = await articlesReq.json()

  return {
    props:{
      articles
    }
  }
}

export default function HomePage({articles}) {
  return (
    <>
      <main>
        <h1>Bienvenidos a este sitio</h1>
      </main>
      <section>
        {articles.map(article=><Article key={article.id}/>)}
      </section>
    </>
  )
}
