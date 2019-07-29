import Markdown from 'react-markdown';
import Layout from '../components/MyLayout';

const MyMarkdown = () => {
//  const router = useRouter();
  return (
    <Layout>
      <h1>here is markdown parse.</h1>
      <div className="markdown">
        <Markdown
          source={`
This is our blog post.  
Yes. We can have a [link](/link).  
And we can have a title as well.

### This is a title

And here's the content.
      `}
        />
      </div>
      <style jsx global>{`
        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>
    </Layout>
  );
};

export default MyMarkdown;