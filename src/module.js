{
  const dispatchEvent = (type, payload) => {
    window.dispatchEvent(
      new CustomEvent('<<<Response<<<', {
        detail: {
          type,
          payload,
        },
      }),
    );
  };

  window.addEventListener('>>>Request>>>', async ({ detail }) => {
    if (detail?.type === '>>>request/editorVersion') {
      const payload = window.editorModel?.editorVersion ?? '<unknown>';

      return dispatchEvent('<<<response/editorVersion', payload);
    }
  });
}
