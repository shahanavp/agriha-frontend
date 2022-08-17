import styles from "../style/pendingtransaction.module.css";
import styless from "../style/requirement.module.css";
function History() {
  return (
    <div className={styles.maindiv}>
      <div className={styles.tableheader}>
        <div className={styles.labeltableheader}>
          <p>Date</p>
          <p>Payment code</p>
          <p>Description</p>
          <p>Stage</p>
          <p>Amount</p>
          <p>Status</p>
        </div>
      </div>

      <div className={styles.tabledata}>
        <p>25/04/2030</p>
        <p>0254LBV56</p>
        <p>Lorem Ipsum has been</p>
        <p>02</p>
        <p>500000</p>
        <p className={styless.selected}>Successful</p>
      </div>

      <div className={styles.tabledata}>
        <p>25/04/2030</p>
        <p>02HDLBV52</p>
        <p>Add on service</p>
        <p>Add on</p>
        <p>500000</p>
        <p className={styless.notselected}>Failed</p>
      </div>

    </div>
  );
}
export default History;
