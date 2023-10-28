"use client";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function Tiktok() {
  return (
    <div>
      <h1>
        TikTok
        <Badge bg="secondary" as={Button}>
          New
        </Badge>
      </h1>
    </div>
  );
}

export default Tiktok;

// const temp = () => {
//   return <>TikTok Page</>;
// };

// export default temp;
