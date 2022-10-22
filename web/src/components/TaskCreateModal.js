//

import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router";
import { CurrentUser } from "../contexts/CurrentUser";

import pencil from "../add_task.png";
import { useDispatch, useSelector } from "react-redux";
import { addTaskDataThunk } from "../app/taskSlice";

Modal.setAppElement("#root");

const customStyles = {
  top: "40%",
  left: "50%",
  right: "auto",
  bottom: "auto",
  // margin: "0 auto",
  marginRight: "-50%",

  transform: "translate(-50%,-50%)",
};

function TaskCreateModal(props) {
  const userContext = useContext(CurrentUser);
  const user = userContext.currentUser;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [task, setTask] = useState({
    name: "",
    description: "",
    startOn: "",
    completedOn: "",
  });

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  function modalSubmit(e) {
    e.preventDefault();
    const formData = e.target;
    dispatch(addTaskDataThunk({
      name: formData.name.value,
      description: formData.description.value,
    }))
    closeModal();
    props.onSave(e);
    navigate("/today");
  }

  return (
    <div className="modal-edit-icon clearfix">
      <img src={pencil} alt="edit" onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={{
          overlay: {
            background: "rgba(0,0,0,0.5)",
          },

          content: {
            ...customStyles,
            boxShadow:
              "inset 0 0em 3em rgba(0,0,0,0.1), 0 0  0 0px rgb(255,255,255), 0em 0em 0.3em rgba(0,0,0,0.4)",
            borderRadius: 4,
          },
        }}
        contentLabel="Create Task"
      >
        <div className="modal-content">
        <h1>Create New Task</h1>
          <form onSubmit={modalSubmit}>
            <div>
              <div style={{ width: 350 }}>
                {/* <form onSubmit={handleSubmit}> */}
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    required
                    // value=""
                    onChange={(e) => setTask({ ...task, name: e.target.value })}
                    className="form-control"
                    id="name"
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    // value=""
                    onChange={(e) =>
                      setTask({ ...task, description: e.target.value })
                    }
                    className="form-control"
                    id="description"
                    name="description"
                  />
                </div>
                {/* <div className="form-group">
            <label htmlFor="pic">Place Picture</label>
            <input
              value=""
              onChange={(e) => setTask({ ...task, pic: e.target.value })}
              className="form-control"
              id="pic"
              name="pic"
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              value=""
              onChange={(e) => setTask({ ...task, city: e.target.value })}
              className="form-control"
              id="city"
              name="city"
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              value=""
              onChange={(e) => setTask({ ...task, state: e.target.value })}
              className="form-control"
              id="state"
              name="state"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cuisines">Cuisines</label>
            <input
              value=""
              onChange={(e) => setTask({ ...task, cuisines: e.target.value })}
              className="form-control"
              id="cuisines"
              name="cuisines"
              required
            />
          </div> */}
                {/* <br />
          <button type="submit">Save</button>
          <button type="reset">Cancel</button>
          <br /> */}
                {/* <input className="btn btn-primary" type="submit" value="Add Place" /> */}
                {/* </form> */}
              </div>
              <button type="submit">Save</button>
              <button onClick={closeModal}>Cancel</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default TaskCreateModal;
