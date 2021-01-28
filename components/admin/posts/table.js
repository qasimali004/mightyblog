import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { BiListPlus } from "react-icons/bi";
import Link from "next/link";

export default function Table({ posts }) {
  const columns = [
    {
      dataField: "id",
      text: "ID",
    },
    {
      dataField: "title",
      text: "Title",
      sort: true,
    },
    {
      dataField: "body",
      text: "Body",
    },
  ];
  const options = {
    paginationSize: 4,
    pageStartIndex: 1,
    showTotal: true,
    disablePageTitle: false,
    sizePerPageList: [
      {
        text: "10",
        value: 10,
      },
      {
        text: "50",
        value: 50,
      },
      {
        text: "100",
        value: 100,
      },
    ], // A numeric array is also available. the purpose of above example is custom the text
  };
  const { SearchBar } = Search;
  return (
    <div className="posts-table">
      <ToolkitProvider keyField="id" data={posts} columns={columns} search>
        {(props) => (
          <div>
            <div className="table-header">
              <h2>Posts</h2>
              <div><Link href="/admin/add_post"><button className="btn btn-primary ml-3 addp-btn"><BiListPlus size="20px" /> Add Post</button></Link></div>
              <div className="search-box">
                <label className="mr-1">Search:</label>
                <SearchBar {...props.searchProps} />
              </div>
            </div>
            <BootstrapTable
              {...props.baseProps}
              bootstrap4
              striped
              hover
              selectRow={{ mode: "checkbox", clickToSelect: true }}
              pagination={paginationFactory(options)}
              noDataIndication="Posts Not found"
              classes="table-borderless table-striped table text-nowrap d-inline-block text-truncate"
            />
          </div>
        )}
      </ToolkitProvider>
    </div>
  );
}
