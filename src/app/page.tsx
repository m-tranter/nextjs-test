import FetchData from "@/components/FetchData";
import Click from "@/components/click";
export default function Home() {
  const title = "My first page";
  const tableData = {
    caption: "A table of personal info",
    contentType: { id: "personalInfo" }
  };
  return (
    <>
      <h1>{title}</h1>
      <FetchData {...tableData} />
    </>
  );
}
