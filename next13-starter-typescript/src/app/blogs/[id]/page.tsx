"use client";

import Link from "next/link";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import useSWR, { Fetcher } from "swr";

const ViewDetail = ({ params }: { params: { id: string } }) => {
  //     const uid = '<user_id>'
  // const fetcher: Fetcher<User, string> = (id) => getUserById(id)

  // const { data } = useSWR(uid, fetcher)
  const fetcher: Fetcher<IBlog, string> = (url: string) =>
    fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `http://localhost:8000/blogs/${params.id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="my-3">
        <Link className="btn btn-primary" href={"/blogs"}>
          Go back
        </Link>
      </div>
      <Card className="text-center">
        <Card.Header>{data?.title}</Card.Header>
        <Card.Body>
          <Card.Text>{data?.content}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          Author : {data?.author}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ViewDetail;
