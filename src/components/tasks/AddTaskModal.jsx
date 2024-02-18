import Modal from "../../ui/Modal";

const AddTaskModal = ({isOpen, setIsOpen}) => {
    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}  title="programming hero " >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo excepturi ut est animi quod quidem quaerat aliquid optio dignissimos officia?</p>
            </Modal>
        </div>
    );
};

export default AddTaskModal;