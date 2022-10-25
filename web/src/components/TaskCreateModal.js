//

import React, { Fragment, useContext, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router";
import { CurrentUser } from "../contexts/CurrentUser";

import pencil from "../add_task.png";
import { useDispatch, useSelector } from "react-redux";
import { addTaskDataThunk, getTasksDataThunk } from "../app/tasksSlice";

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
    taskDate: "",
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
    dispatch(
      addTaskDataThunk({
        name: formData.name.value,
        description: formData.description.value,
        taskDate: formData.taskDate.value,
      })
    );
    closeModal();
    props.onSave(e);
    navigate("/all");
  }

  return user && user.role === "user" ? (
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
              <div className="form-content">
                {/* <form onSubmit={handleSubmit}> */}
                <div className="form-group">
                  <div className="form-row">
                    <label className="form-label" htmlFor="name">
                      Name
                    </label>
                  </div>
                  <div className="form-row">
                    <input
                      type="text"
                      required
                      // value=""
                      onChange={(e) =>
                        setTask({ ...task, name: e.target.value })
                      }
                      className="form-control"
                      id="name"
                      name="name"
                    />
                  </div>
                  <div className="form-row">
                    <label className="form-label" htmlFor="description">
                      Description
                    </label>
                  </div>
                  <div className="form-row">
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
                  <div className="form-row">
                    <label className="form-label" htmlFor="taskDate">
                      Date
                    </label>
                  </div>
                  <div className="form-row">
                    <input
                      type="date"
                      required
                      // value=""
                      onChange={(e) =>
                        setTask({ ...task, taskDate: e.target.value })
                      }
                      className="form-control"
                      id="taskDate"
                      name="taskDate"
                    />
                  </div>
                </div>
              </div>
              <button className="button-link" type="submit">Save</button>
              <button className="button-link" onClick={closeModal}>Cancel</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  ) : (
    <Fragment></Fragment>
  );
}

export default TaskCreateModal;
