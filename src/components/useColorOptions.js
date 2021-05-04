function useColorOptions(actions) {
  function onChange(event) {
    if (event.target.name === 'base') {
      actions.changeBase(event.target.value);
    }
  }

  function onBlur(event) {
    if (event.target.name === 'weight') {
      actions.changeWeight(event.target.value);
    }
  }

  function onSubmit(event) {
    event.preventDefault();
    actions.changeBase(event.target.value);
  }

  return {
    listeners: {
      onChange,
      onBlur,
      onSubmit,
    },
  };
}

export default useColorOptions;
