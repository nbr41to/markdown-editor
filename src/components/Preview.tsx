import { VFC } from 'react';
import ReactMarkdown from 'react-markdown';

type PreviewProps = {
  markdown: string;
};

export const Preview: VFC<PreviewProps> = ({ markdown }) => {
  return (
    <div style={{ whiteSpace: 'pre-wrap' }}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};
