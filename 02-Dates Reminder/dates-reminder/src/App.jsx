import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import persons from "./data";
import DatesCount from "./components/DatesCount";
import DatesAction from "./components/DatesAction";
import DatesList from "./components/DatesList";

function App() {
  const [personData, setPersonData] = useState(persons);

  const onDelete = () => {
    setPersonData([]);
  };

  const onViewData = () => {
    setPersonData(persons);
  };

  useEffect(() => {
    setPersonData([]);
  }, []);

  return (
    <div className="font color-body">
      <Container>
        <DatesCount persons={personData} />
        <DatesList persons={personData} />
        <DatesAction onDelete={onDelete} onViewData={onViewData} />
      </Container>
    </div>
  );
}

export default App;
