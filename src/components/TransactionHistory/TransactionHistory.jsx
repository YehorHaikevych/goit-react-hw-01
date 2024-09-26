import React from "react";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.listTr}>Type</th>
          <th className={styles.listTr}>Amount</th>
          <th className={styles.listTr}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.posishen}>
            <td className={styles.listTd}>{type}</td>
            <td className={styles.listTd}>{amount}</td>
            <td className={styles.listTd}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
