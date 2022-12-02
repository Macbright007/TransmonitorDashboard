import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import { Table, TableRow, TableBodyRow, TableBottom } from "./TableStyles";

const TableDetail = () => {
  return (
    <Table>
      <TableRow>
        <th>Item Type</th>
        <th>Price</th>
        <th>Transaction No</th>
        <th>Time</th>
      </TableRow>

      <TableBodyRow>
        <td
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "60%",
          }}
        >
          <div className="circle">vw</div>
          <p style={{color: "#414042"}}>Apple Mac Book 15” 250 SSD 12GB </p>
        </td>
        <td>
          <p>$73430</p>
        </td>
        <td>
          <p>1234567890</p>
        </td>
        <td>
          <p>12:30</p>
        </td>
        <td
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "60%",
          }}
        >
          <div className="dt">
            <RxDotFilled style={{fontSize: "20px", marginTop: "-7px"}} />
            Reconcilled
          </div>
          <MdKeyboardArrowDown
            style={{ marginTop: "0.2rem", color: "#CCCFD4", fontSize: "20px" }}
          />
        </td>
      </TableBodyRow>
      <TableBodyRow>
        <td
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "60%",
          }}
        >
          <div className="circle">vw</div>
          <p style={{color: "#414042"}}>Apple Mac Book 15” 250 SSD 12GB </p>
        </td>
        <td>
          <p>$73430</p>
        </td>
        <td>
          <p>1234567890</p>
        </td>
        <td>
          <p>12:30</p>
        </td>
        <td
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "60%",
          }}
        >
          <div className="dt">
            <RxDotFilled style={{fontSize: "20px", color: "#EBC315" }} />
            <p style={{margin: "0px", color: "#EBC315"}}>Pending</p>
          </div>
          <MdKeyboardArrowDown
            style={{ marginTop: "0.2rem", color: "#CCCFD4", fontSize: "20px" }}
          />
        </td>
      </TableBodyRow>
      <TableBodyRow>
        <td
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "60%",
          }}
        >
          <div className="circle">vw</div>
          <p style={{color: "#414042"}}>Apple Mac Book 15” 250 SSD 12GB </p>
        </td>
        <td>
          <p>$73430</p>
        </td>
        <td>
          <p>1234567890</p>
        </td>
        <td>
          <p>12:30</p>
        </td>
        <td
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "60%",
          }}
        >
          <div className="dt">
            <RxDotFilled style={{fontSize: "20px", marginTop: "-7px"}} />
            Reconcilled
          </div>
          <MdKeyboardArrowDown
            style={{ marginTop: "0.2rem", color: "#CCCFD4", fontSize: "20px" }}
          />
        </td>
      </TableBodyRow>
      <TableBodyRow>
        <td
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "60%",
          }}
        >
          <div className="circle">vw</div>
          <p style={{color: "#414042"}}>Apple Mac Book 15” 250 SSD 12GB </p>
        </td>
        <td>
          <p>$73430</p>
        </td>
        <td>
          <p>1234567890</p>
        </td>
        <td>
          <p>12:30</p>
        </td>
        <td
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "60%",
          }}
        >
          <div className="dt">
            <RxDotFilled style={{fontSize: "20px", marginTop: "-7px"}} />
            Reconcilled
          </div>
          <MdKeyboardArrowDown
            style={{ marginTop: "0.2rem", color: "#CCCFD4", fontSize: "20px" }}
          />
        </td>
      </TableBodyRow>

      <TableBodyRow>
        <td
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "60%",
          }}
        >
          <div className="circle">vw</div>
          <p style={{color: "#414042"}}>Apple Mac Book 15” 250 SSD 12GB </p>
        </td>
        <td>
          <p>$73430</p>
        </td>
        <td>
          <p>1234567890</p>
        </td>
        <td>
          <p>12:30</p>
        </td>
        <td
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "60%",
          }}
        >
          <div className="dt">
            <RxDotFilled style={{fontSize: "20px", color: "#EBC315" }} />
            <p style={{margin: "0px", color: "#EBC315"}}>Pending</p>
          </div>
          <MdKeyboardArrowDown
            style={{ marginTop: "0.2rem", color: "#CCCFD4", fontSize: "20px" }}
          />
        </td>
      </TableBodyRow>
      <TableBodyRow>
        <td
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "60%",
          }}
        >
          <div className="circle">vw</div>
          <p style={{color: "#414042"}}>Apple Mac Book 15” 250 SSD 12GB </p>
        </td>
        <td>
          <p>$73430</p>
        </td>
        <td>
          <p>1234567890</p>
        </td>
        <td>
          <p>12:30</p>
        </td>
        <td
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "60%",
          }}
        >
          <div className="dt">
            <RxDotFilled style={{fontSize: "20px", color: "#7F8FA4" }} />
            <p style={{margin: "0px", color: "#7F8FA4"}}>Un-reconcilled</p>
          </div>
          <MdKeyboardArrowDown
            style={{ marginTop: "0.2rem", color: "#CCCFD4", fontSize: "20px" }}
          />
        </td>
      </TableBodyRow>
      <TableBodyRow>
        <td
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "60%",
          }}
        >
          <div className="circle">vw</div>
          <p style={{color: "#414042"}}>Apple Mac Book 15” 250 SSD 12GB </p>
        </td>
        <td>
          <p>$73430</p>
        </td>
        <td>
          <p>1234567890</p>
        </td>
        <td>
          <p>12:30</p>
        </td>
        <td
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "60%",
          }}
        >
          <div className="dt">
            <RxDotFilled style={{fontSize: "20px", marginTop: "-7px"}} />
            Reconcilled
          </div>
          <MdKeyboardArrowDown
            style={{ marginTop: "0.2rem", color: "#CCCFD4", fontSize: "20px" }}
          />
        </td>
      </TableBodyRow>
      <TableBodyRow>
        <td
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "60%",
          }}
        >
          <div className="circle">vw</div>
          <p style={{color: "#414042"}}>Apple Mac Book 15” 250 SSD 12GB </p>
        </td>
        <td>
          <p>$73430</p>
        </td>
        <td>
          <p>1234567890</p>
        </td>
        <td>
          <p>12:30</p>
        </td>
        <td
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "60%",
          }}
        >
          <div className="dt">
            <RxDotFilled style={{fontSize: "20px", color: "#7F8FA4" }} />
            <p style={{margin: "0px", color: "#7F8FA4"}}>Un-reconcilled</p>
          </div>
          <MdKeyboardArrowDown
            style={{ marginTop: "0.2rem", color: "#CCCFD4", fontSize: "20px" }}
          />
        </td>
      </TableBodyRow>

      <TableBodyRow>
        <td
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "60%",
          }}
        >
          <div className="circle">vw</div>
          <p style={{color: "#414042"}}>Apple Mac Book 15” 250 SSD 12GB </p>
        </td>
        <td>
          <p>$73430</p>
        </td>
        <td>
          <p>1234567890</p>
        </td>
        <td>
          <p>12:30</p>
        </td>
        <td
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "60%",
          }}
        >
          <div className="dt">
            <RxDotFilled style={{fontSize: "20px", color: "#EBC315" }} />
            <p style={{margin: "0px", color: "#EBC315"}}>Pending</p>
          </div>
          <MdKeyboardArrowDown
            style={{ marginTop: "0.2rem", color: "#CCCFD4", fontSize: "20px" }}
          />
        </td>
      </TableBodyRow>

      <TableBottom>
          <p>Showing 1 to 10 of 500 entries</p>

          <div className="pagination">
            <div>Previous</div>
            <div style={{background: "#1875F0", color: "#fff"}}>1</div>
            <div>2</div>
            <div>Next</div>
          </div>
      </TableBottom>
    </Table>
  );
};

export default TableDetail;
