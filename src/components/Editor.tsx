import { VFC } from 'react';
import { toggledMarkdown } from '../libs';

type EditorProps = {
  value: string;
  setValue: (value: string) => void;
};
export const Editor: VFC<EditorProps> = ({ value, setValue }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const toBold = (e: any) => {
    // e.preventDefault();
    setValue(toggledMarkdown({ text: value, mark: '**' }));
    const inEditor = document.getElementById('editor') as HTMLTextAreaElement;
    inEditor.setSelectionRange(0, 5);
  };
  const toItalic = () => {
    setValue(toggledMarkdown({ text: value, mark: '*' }));
  };

  return (
    <div>
      <button onClick={toBold} onMouseDown={(e) => e.preventDefault()}>
        bold
      </button>
      <button onClick={toItalic}>italic</button>
      <button onClick={toItalic}>bulleted</button>
      <br />
      <textarea
        id='editor'
        value={value}
        onChange={handleChange}
        cols={60}
        rows={10}
        onKeyPress={(e) => {}}
      ></textarea>
    </div>
  );
};
