interface IngredientCheckboxProps {
  ingredient: string;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const IngredientCheckbox: React.FC<IngredientCheckboxProps> = ({
  ingredient,
  handleCheckboxChange,
}) => {
  return (
    <label>
      <input
        type="checkbox"
        value={ingredient}
        onChange={handleCheckboxChange}
      />
      {ingredient}
    </label>
  );
};

export default IngredientCheckbox;
