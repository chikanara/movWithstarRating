import React, { useEffect, useState } from "react";
import "./AddMovie.css";
import Modal from "react-modal";
import StarRating from "../StarRating";
import "../../App.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const AddMovie = ({ handleSubmit }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: "", date: "", rating: 1, image: "" });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
   clearForm()
  }, [modalIsOpen])

  function openModal() {
    setIsOpen(true);
    // clearForm()
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }
  function clearForm() {
    setForm({ name: "", date: "", rating: 0, image: "" })
  }
  
  function closeModal() {
    setIsOpen(false);
    // clearForm()
  }
  const handleRate = (rate) => setForm({ ...form, rating: rate });

  return (
    <div>
      <button onClick={openModal} className="btn add-movie-btn">
        Add
      </button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <button onClick={closeModal}>close</button> */}
        <div>Add Movie</div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit({ ...form, id: Math.random() });
            closeModal()
          }}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            required
            value={form.name}
          />
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            onChange={handleChange}
            required
            value={form.date}
          />
          <label htmlFor="rate">Rate</label>
          <StarRating rate={form.rating} handleRate={handleRate} />
          <label htmlFor="url">Image</label>
          <input
            type="url"
            name="image"
            onChange={handleChange}
            required
            value={form.image}
          />
          <div>
            <button type="submit" className="btn btn-primary">
              Add Movie
            </button>
            <button className="btn btn-danger" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddMovie;
