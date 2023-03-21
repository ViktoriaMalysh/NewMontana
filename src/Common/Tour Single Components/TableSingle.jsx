import { Icon, Table } from "semantic-ui-react";
import { included } from "../../Backend/Data";
import styles from "../../Pages/Tour Single/TourSingle.module.scss";

const TableSingle = () => {
    return (
        <Table celled as="table">
            <Table.Body>
                {Object.keys(included).map((itemKey) => (
                    <Table.Row>
                        <Table.Cell className={styles.tourSingleTableCellLeft}>
                            <Icon
                                name={
                                    included[itemKey] === "Yes"
                                        ? "check circle"
                                        : included[itemKey] === "No"
                                        ? "times circle"
                                        : included[itemKey] === "Airport"
                                        ? "plane"
                                        : included[itemKey] ===
                                          "2 Hours Before Flight"
                                        ? "clock"
                                        : included[itemKey] === "4 Bedrooms"
                                        ? "bed"
                                        : ""
                                }
                                className={
                                    included[itemKey] === "Yes"
                                        ? styles.tourSingleIconTrue
                                        : included[itemKey] === "No"
                                        ? styles.tourSingleIconFalse
                                        : styles.tourSingleIconOther
                                }
                            />
                            {itemKey}
                        </Table.Cell>

                        <Table.Cell className={styles.tourSingleTableCellRight}>
                            {included[itemKey]}
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
};

export default TableSingle;
