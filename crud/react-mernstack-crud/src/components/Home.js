import React from "react";

const Home = () => {
  return (
    <>
      <div className="container mt-2">
        <div className="mt-5 add_button">
          <button className="btn btn-primary">
          <i class="fa-solid fa-plus"></i> Add Data
          </button>
        </div>
      </div>
      <table className="mt-5 table">
        <thead className="table-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td className="d-flex justify-content-between">
                <button className="btn btn-success"><i class="fa-solid fa-eye"></i></button>
                <button className="btn btn-primary"><i class="fa fa-pen"></i></button>
                <button className="btn btn-danger"><i class="fa fa-trash"></i></button>
            </td>
          </tr>
         
        </tbody>
      </table>
    </>
  );
};

export default Home;
