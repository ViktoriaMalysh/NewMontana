import { Table } from "semantic-ui-react";

const TableConfirm = ({ data }) => {
    // const header
    return (
        <Table
            striped
            stackable
            basic="very"
            style={{ marginBottom: "30px", fontSize: "16px" }}
        >
            <Table.Body>
                <Table.Row>
                    <Table.Cell width={8}>Booking Id</Table.Cell>
                    <Table.Cell>*Booking Id*</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>First Name</Table.Cell>
                    <Table.Cell>{data.firstName}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Last Name</Table.Cell>
                    <Table.Cell>{data.lastName}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Email</Table.Cell>
                    <Table.Cell>{data.email}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Phone</Table.Cell>
                    <Table.Cell>{data.phone}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Card number</Table.Cell>
                    <Table.Cell>*XXX-XXXX-XX-11*</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>City</Table.Cell>
                    <Table.Cell>*city*</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Address</Table.Cell>
                    <Table.Cell>{data?.address}</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    );
};

export default TableConfirm;
