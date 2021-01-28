import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import Link from "next/link";

export default function Table({ posts }) {
  const columns = [
    {
      dataField: "id",
      text: "ID",
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,
    },
    {
      dataField: "email",
      text: "Email",
    },
  ];
  const options = {
    paginationSize: 4,
    pageStartIndex: 1,
    showTotal: true,
    disablePageTitle: false,
    sizePerPageList: [
      {
        text: "5",
        value: 5,
      },
      {
        text: "10",
        value: 10,
      },
      {
        text: "25",
        value: 25,
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
              <h2>Categories</h2>
            </div>
            <BootstrapTable
              {...props.baseProps}
              bootstrap4
              striped
              hover
              selectRow={{ mode: "checkbox", clickToSelect: true }}
              pagination={paginationFactory(options)}
              noDataIndication="Categories Not found"
              classes="table-borderless table-striped table text-nowrap d-inline-block text-truncate"
            />
          </div>
        )}
      </ToolkitProvider>
    </div>
  );
}
