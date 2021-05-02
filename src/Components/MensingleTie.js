import React from "react";
import Table from "react-bootstrap/Table";

export default function MensingleTie({ data, index }) {
  return (
    <Table striped bordered hover size="sm">
      <tbody width="100px">
        <tr>
          <td>{data.PlayerSN}</td>

          <td>
            {data.PlayerFullName} ({data.PlayerRepresentation})
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
