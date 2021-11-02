export const toggledMarkdown = (param: { text: string; mark: string }) => {
  const { text, mark } = param;
  const markLength = mark.length;
  const selected = document.getSelection()?.toString();
  const inEditor = document.getElementById('editor') as HTMLTextAreaElement;
  const start = inEditor.selectionStart;
  const end = inEditor.selectionEnd;

  if (
    text.substring(start - markLength, start) === mark &&
    text.substring(end, end + markLength) === mark
  ) {
    inEditor.setSelectionRange(0, 5);
    return (
      text.substring(0, start - markLength) +
      text.substring(start, end) +
      text.substring(end + markLength)
    );
  } else {
    inEditor.setSelectionRange(0, 5);
    return (
      text.substring(0, start) +
      mark +
      text.substring(start, end) +
      mark +
      text.substring(end)
    );
  }
};
