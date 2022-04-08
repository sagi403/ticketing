const newTicket = () => {
  return (
    <div>
      <h1>Create a Ticket</h1>
      <form>
        <div className="form-group mb-3">
          <label>Title</label>
          <input className="form-control" />
        </div>
        <div className="form-group mb-3">
          <label>Price</label>
          <input className="form-control" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default newTicket;
