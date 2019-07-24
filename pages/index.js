import Layout from '../components/MyLayout.js';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Blog = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-nextjs" title="hello, next.js" />
      <PostLink id="learn-nextjs" title="let's learn" />
      <PostLink id="deploy-nexjs" title="how to deploy"/>
    </ul>
  </Layout>
);

export default Blog;