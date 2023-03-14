import { useEffect } from "react";
import { useAtom } from "jotai";
import {
  FilterSpeciesValueAtom,
  FilterGenderValueAtom,
  ChunkDataAtom,
  HomeDataAtom,
  LabelsGenderAtom,
} from "../../state/Atoms";
import optionsCreator from "./optionsCreator";
import "./filter.style.scss";

const Filter = () => {
  const [specie, setSpecie] = useAtom(FilterSpeciesValueAtom);
  const [gender, setGender] = useAtom(FilterGenderValueAtom);
  const [dataSetFull] = useAtom(HomeDataAtom);
  const [dataSet] = useAtom(ChunkDataAtom);
  const [labelsGender, setLabelsGender] = useAtom(LabelsGenderAtom);

  const speciesFilterName = "speciesFilter";
  const genderFilterName = "gendersFilter";
  const optionsFilterSpecies = optionsCreator(dataSet, speciesFilterName);
  const optionsFilterGender = optionsCreator(labelsGender, genderFilterName);

  useEffect(() => {
    setLabelsGender(dataSetFull);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [specie]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target;
    const name = e.target.name;
    name === speciesFilterName
      ? setSpecie(target.value)
      : setGender(target.value);
  };

  return (
    <div className="filter-container">
      <label className="filter-container-label">Choose a species:</label>
      <select
        className="filter-container-select"
        value={specie}
        name={speciesFilterName}
        onChange={(e) => handleChange(e)}
      >
        <option>All species</option>
        {optionsFilterSpecies.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <label className="filter-container-label">Choose a species:</label>
      <select
        className="filter-container-select"
        value={gender}
        name={genderFilterName}
        onChange={(e) => handleChange(e)}
      >
        <option>All genders</option>
        {optionsFilterGender.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
