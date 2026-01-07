import FetchData from "@/components/FetchData";

export type TableDataProps = {
  caption: string
  contentType: { id: string }
}
export default function Home() {
  const title = "My first page";
  const tableData: TableDataProps = {
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
