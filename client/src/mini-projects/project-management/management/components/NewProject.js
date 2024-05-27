import { useRef, useState } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onAdd, onCancel }) => {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const [showModal, setShowModal] = useState(false);

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // Validation to check if either of the inputs are empty
    if (
      !enteredTitle.trim() ||
      !enteredDescription.trim() ||
      !enteredDueDate.trim()
    ) {
      // Validation fails, show the modal
      setShowModal(true);
    } else {
      // Validation passes, proceed with saving the project
      onAdd({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate,
      });
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Modal buttonCaption="Okay" onClose={handleCloseModal}>
          <p>Please fill in the values for the title and description fields</p>
        </Modal>
      )}
      <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="rounded-md text-stone-800 bg-stone-200 hover:bg-stone-800 hover:text-stone-200 p-2 "
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="rounded-md text-stone-800 bg-stone-200 hover:bg-stone-800 hover:text-stone-200 p-2 "
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date.." />
        </div>
      </div>
    </>
  );
};

export default NewProject;
