import { useState } from 'react';
import { Editor } from './components/Editor';
import { Preview } from './components/Preview';

function App() {
  const [markdown, setMarkdown] = useState('');
  const [mode, setMode] = useState<'split' | 'toggle'>('split');
  const [isPreview, setIsPreview] = useState(false);

  console.log(markdown);

  return (
    <div className='App'>
      <h1>Markdown Editor</h1>
      <input
        id='mode-split'
        type='radio'
        checked={mode === 'split'}
        onChange={() => setMode('split')}
      />
      <label htmlFor='mode-split'>split</label>
      <input
        id='mode-toggle'
        type='radio'
        checked={mode === 'toggle'}
        onChange={() => setMode('toggle')}
      />
      <label htmlFor='mode-toggle'>toggle</label>
      <br />
      <input
        id='isPreview'
        type='checkbox'
        checked={isPreview}
        disabled={mode === 'split'}
        onChange={() => setIsPreview(!isPreview)}
      />
      <label htmlFor='isPreview'>preview</label>
      <br />

      <div>
        {isPreview ? (
          <Preview markdown={markdown} />
        ) : (
          <Editor value={markdown} setValue={setMarkdown} />
        )}
        {mode === 'split' && <Preview markdown={markdown} />}
      </div>
    </div>
  );
}

export default App;
