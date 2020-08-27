import Link from "next/link";

const Index = () => (
    <div>
        <h1>Home</h1>
        <Link href="/about">
            <a>Go To Home</a>
        </Link>
        <p> Welcome to the Home page. </p>
    </div>
)


export default Index;