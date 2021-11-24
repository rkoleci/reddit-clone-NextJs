import Link from 'next/link'



export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return {
        props: {
            ninjas: data
        }
    }
}

const Ninjas = ({ ninjas }) => {
    console.log(ninjas)
    return (
        <div>
            Ninjas
            {ninjas.map(n => <Link href={`/ninjas/${n.id}`}>{n.name}</Link>)}
        </div>
    )
}

export default Ninjas