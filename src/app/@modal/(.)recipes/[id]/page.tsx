import { Modal } from "./modal";

export default function RecipeModal({
  params: { id: recipeId },
}: {
  params: { id: string };
}) {
  return <Modal>{recipeId}</Modal>;
}
