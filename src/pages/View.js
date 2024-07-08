import React, { useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";

function View() {
  const [users, setUsers] = React.useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/users/getusers")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const deleteData = (id) => {
    axios
      .delete("http://localhost:4000/users/deleteUser/" + id)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          alert("user deleted successfully");
          window.reload();
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const display = (data) => {
    return data.map((user) => {
      return (
        <tr>
          <td>{user._id}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.password}</td>
          <td>
            <button
              onClick={() => {
                deleteData(user._id);
              }}
            >
              Delete
            </button>
            <button>Update</button>
          </td>
        </tr>
      );
    });
  };
  return (
    <Layout>
      <h1>View Page</h1>
      <table>
        <thead>
          <tr>
            <th>_Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{display(users)}</tbody>
      </table>
    </Layout>
  );
}

export default View;