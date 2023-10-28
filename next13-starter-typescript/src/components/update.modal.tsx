"use client";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import useSWR, { mutate } from "swr";
interface IProps {
  showModalUpdate: boolean;
  setshowModalUpdate: (v: boolean) => void;
  blog: IBlog | null;
  setBlog: (value: IBlog | null) => void;
}

function UpdateModal(props: IProps) {
  const { showModalUpdate, setshowModalUpdate, blog, setBlog } = props;
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (blog && blog.id) {
      setId(blog.id);
      setTitle(blog.title);
      setAuthor(blog.author);
      setContent(blog.content);
    }
  }, [blog]);

  console.log("check ket qua blog truyen qua", blog);

  const validateItem = () => {
    if (!title) {
      toast.error("Not empty title ");
      return false;
    }

    if (!author) {
      toast.error("Not empty author");
      return false;
    }

    if (!content) {
      toast.error("Not empty content");
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    const blogidTest = id;
    console.log(blogidTest);
    // Call validateItem to perform validation
    if (!validateItem()) {
      return;
    }
    console.log("bat dau update neeeee!", title, author, content);
    try {
      fetch(`http://localhost:8000/blogs/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, author, content }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            console.log("update ket qua la - ", res);
            toast.success("Update Blogs succeed...!");
            handleClose();
            mutate("http://localhost:8000/blogs");
          }
        });
    } catch (error) {
      console.log(error);
    }

    console.log("update done neeeee!");
  };

  const handleClose = () => {
    setTitle("");
    setAuthor("");
    setContent("");
    setBlog(null);
    setshowModalUpdate(false);
  };
  return (
    <>
      <Modal
        show={showModalUpdate}
        onHide={() => handleClose()}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Blogs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="..."
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateModal;
