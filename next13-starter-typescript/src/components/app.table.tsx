"use client";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import CreateModal from "./create.modal";
import { useState } from "react";
import UpdateModal from "./update.modal";
import Link from "next/link";
import { toast } from "react-toastify";
import { mutate } from "swr";
interface IProps {
  blogs: IBlog[];
}

const AppTable = (props: IProps) => {
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [showModalCreate, setshowModalCreate] = useState<boolean>(false);
  const [showModalUpdate, setshowModalUpdate] = useState<boolean>(false);
  const { blogs } = props;
  // console.log("check props blogs :", blogs);
  const handleDelete = (id: number) => {
    if (confirm(`Do you want to delete blog (id = ${id})`) == true) {
      try {
        fetch(`http://localhost:8000/blogs/${id}`, {
          method: "DELETE",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          // body: JSON.stringify({ title, author, content }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res) {
              toast.success("Delete Blogs succeed...!");
              // handleClose();
              mutate("http://localhost:8000/blogs");
            }
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      // text = "You canceled!";
    }
  };
  return (
    <>
      <div
        className="mb-3 mt-3"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h3>Table Blogs</h3>
        <Button variant="secondary" onClick={() => setshowModalCreate(true)}>
          Add New
        </Button>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>
                  <Link className="btn btn-primary" href={`/blogs/${item.id}`}>
                    View
                  </Link>

                  <Button
                    variant="warning"
                    className="mx-3"
                    onClick={() => {
                      setBlog(item);
                      setshowModalUpdate(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
          <tr></tr>
        </tbody>
      </Table>
      <CreateModal
        showModalCreate={showModalCreate}
        setshowModalCreate={setshowModalCreate}
      />
      <UpdateModal
        showModalUpdate={showModalUpdate}
        setshowModalUpdate={setshowModalUpdate}
        blog={blog}
        setBlog={setBlog}
      />
    </>
  );
};

export default AppTable;
