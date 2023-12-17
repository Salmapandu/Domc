import { useState } from "react";
import { Modal } from "./component/Modal";
import "./App.css";
import Table  from "./component/Table";

const rows = [
  { page: "Page 1", description: "This is the first page", status: "live" },
  { page: "Page 2", description: "This is the second page", status: "draft" },
  { page: "Page 3", description: "This is the third page", status: "error" },
];

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <Table rows={rows} />
      <button className="btn" onClick={() => setModalOpen(true)}>
        Add
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
