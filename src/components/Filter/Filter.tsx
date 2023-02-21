import { useAtom } from "jotai";
import { FilterDataAtom, filterAtom } from "../../state/Atoms";

import "./filter.style.scss";

const Filter = () => {
  const [data] = useAtom(FilterDataAtom);
  const [dataFilter, setDataFilter] = useAtom(filterAtom);

  const arrayLabels = data?.map(
    (item: { [key: string]: string }) => item.species
  );

  const options: Array<string> = [];

  arrayLabels?.forEach((item) => {
    const check = options.some((arrVal: string) => item === arrVal);
    if (!check) {
      options.push(item);
    }
  });

  const handleChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setDataFilter(target.value);
  };

  return (
    <div className="filter-container">
      <label className="filter-container-label">Choose a species:</label>
      <select
        className="filter-container-select"
        value={dataFilter}
        name="speciesFilter"
        onChange={(e) => handleChange(e)}
      >
        <option className="pakman">All species</option>
        {options.map((item) => (
          <option className="pakman" value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
