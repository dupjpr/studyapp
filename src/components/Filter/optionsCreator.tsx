const optionsCreator = (data: any, name: string) => {
  let options: Array<string> = [];

  const optionsFilterLabels = data?.map((item: { [key: string]: string }) =>
    name === "speciesFilter" ? item.species : item.gender
  );

  optionsFilterLabels?.forEach((item: any) => {
    const check = options.some((arrVal: string) => item === arrVal);
    if (!check) {
      options = [...options, item];
    }
  });
  return options;
};

export default optionsCreator;
