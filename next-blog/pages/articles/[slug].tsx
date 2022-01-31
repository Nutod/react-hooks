import { useRouter } from 'next/router'

// Renders each individual page
// Next will ask for a lot of information about this page

export default function Index() {
  const router = useRouter()
  const { slug } = router.query

  console.log(slug)

  return (
    <div
      style={{
        marginInline: '20rem',
        marginBlockStart: '4rem',
      }}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        assumenda dolorum doloribus vel autem, culpa, repellendus quisquam qui
        porro expedita sapiente ipsum sed ab suscipit adipisci enim! Vero,
        distinctio beatae.
      </p>
    </div>
  )
}

export async function getStaticProps(context) {
  console.log(context)
  return {
    props: {},
  }
}
