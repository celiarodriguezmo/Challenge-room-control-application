import Room from "./Room.js";

function Floor(props) {
  function AddRoom(ev) {
    props.handleAddRoom({
      idButton: ev.currentTarget.id,
    });
  }

  const elements = props.paintFloor.map((room, index) => {
    return (
      <Room
        key={index}
        room={room}
        inputValidate={props.inputValidate}
        handleCapacity={props.handleCapacity}
        handleOccupation={props.handleOccupation}
        handleModifyRoom={props.handleModifyRoom}
        handleDeleteIcon={props.handleDeleteIcon}
      />
    );
  });

  return (
    <main className='main-floor'>
      <div className='main-floor__div'>
        <h2 className='main-floor__title'>{props.selectedFloor}</h2>
        <button className='main-floor__button' onClick={AddRoom} id='addRoom'>
          Añadir sala
        </button>
      </div>
      <ul className='main-floor__list'>{elements}</ul>
    </main>
  );
}

export default Floor;
