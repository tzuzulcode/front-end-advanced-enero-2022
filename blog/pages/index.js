import axios from 'axios'

export async function getServerSideProps(context){
  const secure = context.req.connection.encrypted
  
  const url = `${secure?"https":"http"}://${context.req.headers.host}/api/posts`
  
  const res = await axios.get(url)
  
  return {
      props:{
          posts:res.data
      }
  }
}
export default function Home({posts}) {
  return (
    <div>
      {posts.filter(post=>post.highlight)
        .map(post=>{
          return <header>
            <div className='h-72 overflow-hidden relative mt-10'>
              <img className='absolute -inset-y-1/2' src={post.image}></img>
              <div className='absolute w-full h-full bg-slate-900 flex flex-col justify-center items-center bg-opacity-70'>
                <h1 className='font-bold text-6xl'>{post.title}</h1>
                <p className='mt-5'>Lee mi ultima publicación aquí</p>
              </div>
              {/* Efecto parallax */}
            </div>
          </header>
        })
      }
    </div>
  )
}
