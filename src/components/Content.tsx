import ContactForm from './ContactForm';
import LsShortcode from './LsShortcode';

interface ContentProps {
  type: string;
  text?: string;
  children: ContentProps[];
  attributes?: Record<string, string> | string;
}

export default function Content({ content }: { content: ContentProps[] }) {
  return (
    <>
      {content.map((c) => {
        /* shortcodes */
        if (c.type === 'shortcode') return <Shortcode name={c.data} data={c} />;

        /* text */
        if (c.type === 'text') return <>{c.text}</>;

        /* tag (container for text) */
        const Tag = c.type;
        return (
          <Tag {...c.attributes}>
            {c.children && <Content content={c.children} />}
          </Tag>
        );
      })}
    </>
  );
}

function Shortcode({
  name,
  data,
}: {
  name: string;
  data: Record<string, any>;
}) {
  // console.log(name, data);
  switch (name) {
    case 'contactform':
      return <ContactForm />;
    case 'ls':
      return <LsShortcode name={data.attributes} />;
    default: {
      // console.log(`Unknown shortcode: ${name}`);
      return null;
    }
  }
}
