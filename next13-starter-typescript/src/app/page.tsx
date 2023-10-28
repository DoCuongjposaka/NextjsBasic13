import Link from "next/link";
import x1 from "@/styles/app.module.css";
import x2 from "@/styles/dhc.module.css";
import AppTable from "@/components/app.table";
import { useEffect } from "react";
import useSWR from "swr";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "HomePage",
  description: "HomePage Bla Bla",
};
export default function Home() {
  // const fetcher = (url: string) => fetch(url).then((res) => res.json());

  // const { data, error, isLoading } = useSWR(
  //   "http://localhost:8000/blogs",
  //   fetcher,
  //   {
  //     revalidateIfStale: false,
  //     revalidateOnFocus: false,
  //     revalidateOnReconnect: false,
  //   }
  // );
  // if (!isLoading) {
  //   return <div>Loading...</div>;
  // }
  // // if (error) return "An error has occurred.";
  // // if (isLoading) return "Loading...";
  // console.log("Check ket qua ", data);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     // const res = await fetch("http://localhost:8000/blogs");
  //     // const data = await res.json();
  //     // console.log("Check ket qua ", data);
  //   };
  //   fetchData();
  // }, []);
  return (
    <div>
      {/* <ul>
        <li>
          <Link href={"/facebook"}>FaceBook</Link>
        </li>
        <li>
          <Link href={"/youtube"}>YoutuBe</Link>
        </li>
        <li>
          <Link href={"/tiktok"}>TikTok</Link>
        </li>
      </ul> */}
      {/* <AppTable blogs={data?.sort((a: any, b: any) => b.id - a.id)} /> */}
    </div>
  );
}
