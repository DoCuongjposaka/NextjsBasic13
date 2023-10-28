"use client";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

const Facebook = () => {
  const router = useRouter();

  const handleBtn = () => {
    router.push("/");
  };
  const handleSucces = () => {
    alert("SuccesButton");
  };
  const dangerBtn = () => {
    alert("dangerBtn");
  };
  return (
    <div>
      FaceBook Page
      <div>
        <Button variant="primary" onClick={() => handleBtn()}>
          BackHome
        </Button>
        <Button variant="success" onClick={() => handleSucces()}>
          Success
        </Button>
        <Button variant="danger" onClick={() => dangerBtn()}>
          Danger
        </Button>
        {/* <button onClick={() => handleBtn()}>Back Home</button> */}
      </div>
      <div></div>
    </div>
  );
};

export default Facebook;
